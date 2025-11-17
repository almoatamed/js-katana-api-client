import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import io, { ManagerOptions, Socket, SocketOptions } from "socket.io-client";

const catchCb = <T>(cb: () => T): T | null => {
    try {
        return cb();
    } catch {
        return null;
    }
};

const isDev = (): boolean => {
    return !!(
        catchCb(() => {
            //@ts-ignore
            return import.meta.__DEV__ ?? import.meta.dev;
        }) ??
        catchCb(() => {
            //@ts-ignore
            return __DEV__;
        }) ??
        catchCb(() => {
            //@ts-ignore
            return ["dev", "test"].includes(String(process.env.NODE_ENV).toLowerCase());
        }) ??
        catchCb(() => {
            //@ts-ignore
            return ["dev", "test"].includes(String(process.env.ENV).toLowerCase());
        }) ??
        false
    );
};

const dev = isDev();
const log = (...msgs: any) => {
    if (dev) {
        console.debug(...msgs);
    }
};

export const trimSlashes = (path: string, removeStartingSlash = false, removeEndingSlash = true) => {
    if (path == "/") {
        return path;
    }

    const protocol = path.match(/^.+?:\/\//)?.[0] || "";
    if (protocol) {
        path = path.slice(protocol.length);
    }

    const startsWithASlash = path.startsWith("/");
    const endsWithASlash = path.endsWith("/");

    const paths = path.split("/").filter(x => x);
    const processedPaths = [] as string[];
    for (const path of paths) {
        if (path == "..") {
            processedPaths.splice(-1, 1);
            continue;
        }

        if (path == ".") {
            continue;
        }

        processedPaths.push(path);
    }

    path = processedPaths.join("/") || "/";
    if (path == "/") {
        return path;
    }

    if (startsWithASlash && !removeStartingSlash) {
        path = "/" + path;
    }

    if (endsWithASlash && !removeEndingSlash) {
        path = path + "/";
    }

    return protocol + path;
};

const path = {
    join: function pathJoin(...args: string[]) {
        const parts: string[] = [];
        for (let i = 0; i < args.length; i++) {
            const part = args[i]?.trim();
            if (!part) continue;
            if (i === 0) {
                parts.push(part.replace(/[/\\]+$/, ""));
            } else {
                parts.push(part.replace(/(^[/\\]+|[/\\]+$)/g, ""));
            }
        }
        return parts.join("/");
    },
};

export const isNumber = function (num: any): num is number {
    if (typeof num === "number") {
        return num - num === 0;
    }
    if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};

export type AsyncEmitOptions = {
    timeout?: number;
    sinceMins?: number;
    now?: boolean;
    quiet?: boolean;
    notScoped?: boolean;
};

export interface ExtendedSocket extends Socket {
    destroyCurrentInstance: () => void;
}

export type Storage = {
    save: <T>(key: string, value: T) => void | Promise<void>;
    get: <T>(key: string) => T | null | Promise<T | null>;
    clear: () => Promise<void> | void;
};

export const createWebStorage = (): Storage => {
    function clearLocalStoragePrefix(prefix: string) {
        // Collect keys first (avoid mutating while iterating)
        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                keysToRemove.push(key);
            }
        }

        // Now remove them
        keysToRemove.forEach(key => localStorage.removeItem(key));
    }
    const keyPrefix = "KT-API:";
    const getFullKey = (key: string) => {
        return `${keyPrefix}${key}`;
    };
    return {
        clear() {
            clearLocalStoragePrefix(keyPrefix);
        },
        get(key) {
            const result = localStorage.getItem(getFullKey(key));
            if (!result) {
                return null;
            }

            return JSON.parse(result);
        },
        save(key, value) {
            if (!value) {
                localStorage.removeItem(getFullKey(key));
            }
            localStorage.setItem(getFullKey(key), JSON.stringify(value));
        },
    };
};

type BaseUrl = string;
type GetToken = () => string | undefined;
type AppHeader = string | undefined;
type ChannellingPrefix = string | undefined;
type SocketProps = {
    baseUrl: BaseUrl;
    storage?: Storage;
    channellingRequestTimeout?: number;
    beforeReconnect?: (options: Partial<ManagerOptions & SocketOptions>) => void | boolean;
    query?: any;
    scope?: string;
    noCaching?: () => boolean;
    getToken?: GetToken;
    autoConnect?: boolean;
    autoReconnect?: boolean;
    transports?: string[];
    appHeader?: AppHeader;
    channellingPrefix?: ChannellingPrefix;
};
export type RequestError = {
    statusCode: number;
    errors: {
        error: string;
        errors?: string[] | undefined;
        data?: any;
    }[];
};

export const extractApiError = (error: any): RequestError | null => {
    if (isNumber(error?.statusCode) && Array.isArray(error?.errors) && typeof error?.errors[0]?.error == "string") {
        return error as RequestError;
    }
    return null;
};

export const createSocketClient = <
    AsyncEmit = <T = any>(event: string, body?: any, options?: AsyncEmitOptions) => Promise<T>,
    OnEvent = DefaultOnEvent
>(
    props: SocketProps
) => {
    if (props.autoConnect === undefined) {
        props.autoConnect = true;
    }

    const createEventFromRoute = (route: string, notScoped: boolean) => {
        let event = notScoped ? route : path.join(props.scope || "", route);
        if (!event.endsWith("/")) {
            event += "/";
        }
        return event;
    };
    const auth = () => {
        return {
            token: props.getToken?.(),
            "x-app": props.appHeader,
        };
    };

    let socketInstance: ExtendedSocket | null = null;

    const onceConnectQueue = [] as (() => void | Promise<void>)[];
    async function onceConnect(cb: () => any) {
        if (socketInstance?.connected) {
            try {
                await cb();
            } catch (error) {
                console.error(error);
            }
        } else {
            onceConnectQueue.push(async () => {
                try {
                    await cb();
                } catch (error) {
                    console.error("once connect error", error);
                }
            });
        }
    }

    const onConnectListeners = [] as (() => void | Promise<void>)[];
    const onConnect = async (cb: () => any) => {
        const listener = async () => {
            try {
                await cb();
            } catch (error) {
                console.error("onConnect listener error", error);
            }
        };
        onConnectListeners.push(listener);
        if (socketInstance?.connected) {
            await listener();
        }
        return () => {
            const index = onConnectListeners.indexOf(listener);
            if (index !== -1) {
                onConnectListeners.splice(index, 1);
            }
        };
    };
    const onDisconnectListeners = [] as (() => void | Promise<void>)[];
    const onDisconnect = async (cb: () => any) => {
        const listener = async () => {
            try {
                await cb();
            } catch (error) {
                console.error("onDisconnect listener error", error);
            }
        };
        onDisconnectListeners.push(listener);
        if (!socketInstance?.connected) {
            await listener();
        }
        return () => {
            const index = onDisconnectListeners.indexOf(listener);
            if (index !== -1) {
                onDisconnectListeners.splice(index, 1);
            }
        };
    };

    const onListeners = {} as {
        [event: string]: {
            originalCB: (...args: any[]) => any | Promise<any>;
            listener: (...args: any[]) => any | Promise<any>;
        }[];
    };
    const on = (event: string, cb: (...args: any[]) => any | Promise<any>) => {
        const listener = async (...args: any[]) => {
            try {
                await cb(...args);
            } catch (error) {
                console.error("on listener error", error);
            }
        };
        if (!onListeners[event]) {
            onListeners[event] = [];
        }
        onListeners[event].push({ listener, originalCB: cb });
        socketInstance?.on(event, listener);

        return () => {
            const listeners = onListeners[event];
            if (!listeners) return;
            const index = listeners.findIndex(l => l.listener === listener);
            if (index !== -1) {
                listeners.splice(index, 1);
                socketInstance?.off(event, listener);
            }
        };
    };
    const off = (event: string, cb: (...args: any[]) => any | Promise<any>) => {
        const listeners = onListeners[event];
        if (!listeners) return;
        const index = listeners.findIndex(l => l.listener === cb || l.originalCB === cb);
        if (index !== -1) {
            socketInstance?.off(event, listeners[index].listener);
            listeners.splice(index, 1);
        }
    };

    const disconnect = () => {
        socketInstance?.disconnect();
    };

    let isConnected = false;

    const reconnect = () => {
        log("Connecting", props);

        if (props.channellingPrefix === undefined) {
            console.warn("channeling prefix is not set using default `/channel`");
            props.channellingPrefix = "/channel";
        }

        const options = {} as Partial<ManagerOptions & SocketOptions>;

        options.auth = props.getToken || props.appHeader ? cb => cb(auth()) : undefined;

        if (props.query) {
            options.query = props.query;
        }

        if (props.transports) {
            options.transports = props.transports;
        } else {
            options.transports = ["websocket"];
        }

        if (props.channellingPrefix) {
            options.path = props.channellingPrefix;
        }

        if (props.beforeReconnect) {
            const result = props.beforeReconnect(options);
            if (result === false) {
                return;
            }
        }

        socketInstance?.destroyCurrentInstance();

        isConnected = false;
        options.autoConnect = true;
        options.reconnection = props.autoReconnect;

        let currentInstance: null | ExtendedSocket = null;

        const ioSocket = io(props.baseUrl, options);
        currentInstance = socketInstance = Object.assign(ioSocket, {
            destroyCurrentInstance: () => {
                currentInstance?.disconnect();
                currentInstance = null;
                socketInstance = null;
            },
        });

        socketInstance.on("connectError", error => {
            console.error("Socket Connection Error", error);
        });

        socketInstance.on("disconnect", async () => {
            isConnected = false;
            await Promise.all(onDisconnectListeners.map(cb => cb()));
        });

        socketInstance.once("connect", async () => {
            log("Connected socket");
            await Promise.all(onceConnectQueue.splice(0).map(cb => cb()));
        });

        socketInstance.on("connect", async () => {
            isConnected = true;
            log("Connected!!");
            await Promise.all(onConnectListeners.map(cb => cb()));
        });

        for (const event in onListeners) {
            for (const l of onListeners[event]) {
                socketInstance.on(event, l.listener);
            }
        }
    };

    const performAsyncEmit = function <T = any>(
        event: string,
        body?: any,
        options: AsyncEmitOptions = {
            timeout: 6e4,
        }
    ): Promise<T> {
        event = createEventFromRoute(event, options.notScoped || false);

        return new Promise((resolve, reject) => {
            if (!socketInstance) {
                return reject(new Error("Socket is not connected"));
            }
            socketInstance
                .timeout(options.timeout || 6e4)
                .emit(event, body || null, (internalError: any, response: any) => {
                    if (!internalError && !response?.error && !response?.err && !response?.errors) {
                        return resolve(response);
                    } else {
                        return reject(internalError || response);
                    }
                });
        });
    };

    const asyncEmit = async function <T = any>(
        event: string,
        body?: any,
        options: AsyncEmitOptions = {
            timeout: props.channellingRequestTimeout || 6e4,
        }
    ): Promise<T> {
        const matchBody = {
            event,
            body,
        };
        const key = JSON.stringify(matchBody);
        const storage = props.storage;
        const noCaching = props.noCaching?.() === true;

        const refetch = async (): Promise<T> => {
            const response = await performAsyncEmit<T>(event, body, options);
            if (storage && typeof options?.sinceMins == "number" && options?.sinceMins > 0) {
                try {
                    await storage.save(key, {
                        timestamp: Date.now(),
                        response,
                    });
                } catch (error) {
                    console.error(error);
                    await storage.clear();
                    await storage.save(key, {
                        timestamp: Date.now(),
                        response,
                    });
                }
            }
            return response;
        };

        if (noCaching) {
            return await refetch();
        }

        if (typeof options?.sinceMins == "number" && options?.sinceMins > 0 && !options?.now) {
            const localCache = await storage?.get<any>(key);
            if (localCache?.timestamp) {
                const timestamp =
                    typeof localCache.timestamp === "number" ? localCache.timestamp : Number(localCache.timestamp);
                if ((Date.now() - timestamp) / 60e3 < options.sinceMins) {
                    return localCache.response;
                }
            }
        }
        return await refetch();
    } as AsyncEmit;

    const socketState = {
        reconnect,
        socket: () => socketInstance,
        isConnected: () => isConnected,
        asyncEmit: asyncEmit,
        on: on as OnEvent,
        off,
        disconnect,
        removeListener: off,
        onDisconnect,
        performAsyncEmit,
        _asyncEmit: performAsyncEmit,
        props,
        onConnect,
        onceConnect,
        createEventFromRoute,
    };

    if (props.autoConnect) {
        reconnect();
    }

    return socketState;
};

export type RequestConfig<D> = {
    requestVia?: ("http" | "socket")[];
} & AsyncEmitOptions &
    AxiosRequestConfig<D>;

type Merge<T, U> = T & Omit<U, keyof T>;

export type ApiInterface<Post = DefaultApiPost, Put = DefaultApiPut, Delete = DefaultApiDelete, Get = DefaultApiGet> = {
    _post: Post;
    _put: Put;
    _delete: Delete;
    _get: Get;
} & Merge<
    {
        baseUrl?: string;
        post: Post;
        put: Put;
        delete: Delete;
        get: Get;
    },
    AxiosInstance
>;

const passthroughFn = <T>(x: T) => x;

type HttpPrefix = string | undefined;
type ApiScope = string | undefined;
type onUnauthorized = () => void | Promise<void>;

export type ApiProps = {
    getToken?: GetToken;
    httpRequestTimeout?: number;
    appHeader?: AppHeader;
    noCaching?: () => boolean;
    baseUrl: BaseUrl;
    httpPrefix?: HttpPrefix;
    scope?: ApiScope;
    httpOnly?: () => boolean;
    storage?: Storage;
    onUnauthorized?: onUnauthorized;
    channelling?: {
        useChannelling: boolean;
        channellingRequestTimeout?: number;
        beforeReconnect?: (
            options: Partial<ManagerOptions & SocketOptions>
        ) => void | boolean | Promise<void | boolean>;
        query?: any;
        autoConnect?: boolean;
        autoReconnect?: boolean;
        transports?: string[];
        channellingPrefix?: ChannellingPrefix;
    };
};

export type DefaultApiPost = <T = any, D = any>(
    url: string,
    data?: D,
    config?: RequestConfig<D>
) => Promise<{
    data: T;
}>;

export type DefaultApiPut = <T = any, D = any>(
    url: string,
    data?: D,
    config?: RequestConfig<D>
) => Promise<{
    data: T;
}>;
export type DefaultApiDelete = <T = any, D = any>(
    url: string,
    config?: RequestConfig<D>
) => Promise<{
    data: T;
}>;
export type DefaultApiGet = <T = any, D = any>(
    url: string,
    config?: RequestConfig<D>
) => Promise<{
    data: T;
}>;

type DefaultOnEvent = (
    event: string,
    cb: (body: any, cb?: (body?: any) => Promise<void>) => any | Promise<any>
) => Promise<() => void>;

export const createApiClient = <
    Post = DefaultApiPost,
    Put = DefaultApiPut,
    Delete = DefaultApiDelete,
    Get = DefaultApiGet,
    AsyncEmit = <T = any>(event: string, body?: any, options?: AsyncEmitOptions) => Promise<T>,
    OnEvent = DefaultOnEvent
>(
    props: ApiProps
) => {
    if (props.channelling === undefined) {
        props.channelling = {
            useChannelling: true,
        };
    }

    const socketProps: SocketProps = {
        baseUrl: props.baseUrl,
        autoConnect: false,
    };
    const socket: ReturnType<typeof createSocketClient<AsyncEmit, OnEvent>> = createSocketClient(socketProps);

    const updateSocketConfig = () => {
        if (props.channelling) {
            for (const key in props.channelling) {
                (socketProps as any)[key] = (props as any).channelling[key];
            }
            if (props.channelling.autoConnect === undefined) {
                socketProps.autoConnect = true;
            }
        }
        socketProps.scope = props.scope;
        socketProps.storage = props.storage;
        socketProps.baseUrl = props.baseUrl;
        socketProps.appHeader = props.appHeader;
        socketProps.getToken = props.getToken;
        socketProps.noCaching = props.noCaching;
        log("Updated props for socket", socketProps);
    };

    const setSocket = () => {
        updateSocketConfig();
        socket.reconnect();
    };

    const removeSocket = () => {
        socket.socket()?.destroyCurrentInstance();
    };

    const reloadSocket = () => {
        if (props.channelling?.useChannelling) {
            setSocket();
        } else {
            removeSocket();
        }
    };

    const httpRequestTimeoutValue = props.httpRequestTimeout ?? 120e3;

    const modifyHttpRequestConfig = (config: InternalAxiosRequestConfig<any> & { notScoped?: boolean }) => {
        config.timeout = httpRequestTimeoutValue;
        config.baseURL = path.join(props.baseUrl, props.httpPrefix || "", config.notScoped ? "" : props.scope || "");

        const token = props.getToken?.();
        if (token) {
            config.headers["Authorization"] = token;
        }

        const appHeader = props.appHeader;
        if (appHeader) {
            config.headers["x-app"] = appHeader;
            config.headers["app"] = appHeader;
        }
        log("final http config", config);
        return config;
    };
    const httpErrorResponseHandler = async (error: any) => {
        const response = error?.response;
        if (response && response.status === 401) {
            await props.onUnauthorized?.();
        }
        throw error;
    };
    const createHttpInstance = (): ApiInterface<Post, Put, Delete, Get> => {
        const Api: any = axios.create({
            baseURL: props.baseUrl,
        });
        Api.interceptors.request.use((config: any) => modifyHttpRequestConfig(config));
        Api.interceptors.response.use(passthroughFn, httpErrorResponseHandler);
        Api._put = Api.put;
        Api._post = Api.post;
        Api._get = Api.get;
        Api._delete = Api.delete;
        Api.put = createDispatcherWithCachingWithBody("put") as any;
        Api.post = createDispatcherWithCachingWithBody("post") as any;
        Api.delete = createDispatcherWithCachingNoBody("delete") as any;
        Api.get = createDispatcherWithCachingNoBody("get") as any;
        return Api;
    };
    const Api: ApiInterface<Post, Put, Delete, Get> = {} as any;
    const reloadHttpInstance = () => {
        Object.assign(Api, createHttpInstance());
    };

    const reloadConfig = (updatedProps?: Partial<ApiProps>) => {
        if (updatedProps) {
            for (const key in updatedProps) {
                if (updatedProps[key] !== undefined) {
                    (props as any)[key] = (updatedProps as any)[key];
                }
            }
        }
        reloadHttpInstance();
        reloadSocket();
    };

    const isSocketEmitPossible = <D>(url: string, body: any, options: RequestConfig<D>) => {
        return (
            props.httpOnly?.() !== true &&
            !(body instanceof FormData) &&
            socket?.isConnected() === true &&
            (!options?.requestVia || options.requestVia.includes("socket"))
        );
    };

    const attemptToSaveToStorage = async <T>(key: string, value: T) => {
        if (!props.storage) {
            return;
        }
        const storage = props.storage;
        try {
            await storage.save(key, {
                timestamp: Date.now(),
                response: {
                    data: value,
                },
            });
        } catch (error) {
            console.error(error);
            storage.clear();
            await storage.save(key, {
                timestamp: Date.now(),
                response: {
                    data: value,
                },
            });
        }
    };

    type RequestDispatchDetails<D> =
        | { method: "get" | "delete"; options: RequestConfig<D>; key: string; url: string }
        | { method: "post" | "put"; options: RequestConfig<D>; key: string; url: string; body: D };

    const modifySocketDispatch = <D>(details: RequestDispatchDetails<D>) => {
        const options = { ...details.options };
        const headers = options.headers || {};

        const token = props.getToken?.();
        if (token) {
            headers.authorization = token;
        }
        const appHeader = props.appHeader;
        if (appHeader) {
            headers["x-app"] = appHeader;
            headers["app"] = appHeader;
        }

        options.headers = headers;
        return { ...details, options };
    };

    const dispatchRequestViaSocket = async <D, R>(details: RequestDispatchDetails<D>): Promise<R> => {
        if (!props.channelling || !socket?.isConnected()) {
            throw new Error("Socket is not connected");
        }

        const detailsWithHeaders = modifySocketDispatch(details);

        const body =
            detailsWithHeaders.method === "post" || detailsWithHeaders.method === "put" ? detailsWithHeaders.body : {};

        const { options, key, url } = detailsWithHeaders;

        const emitBody = {
            ...body,
            __query: options.params,
            __headers: options.headers,
        };

        const responseBody: any = await socket.performAsyncEmit(`---%http%---/${url}`, emitBody, {
            timeout: httpRequestTimeoutValue,
            notScoped: details.options.notScoped,
            quiet: details.options.quiet,
        });
        log("Socket dispatch response body", responseBody);

        if (typeof options?.sinceMins == "number" && options?.sinceMins > 0) {
            await attemptToSaveToStorage(key, responseBody);
        }

        return { data: responseBody } as R;
    };

    const dispatchRequestViaHttp = async <D, R>(details: RequestDispatchDetails<D>): Promise<R> => {
        const { url, options, method, key } = details;
        log("requesting via http", details);
        const apiMethod = (Api as any)?.[`_${method}`];
        const response =
            details.method === "post" || details.method === "put"
                ? await apiMethod?.(url, details.body, options)
                : await apiMethod?.(url, options);
        if (typeof options?.sinceMins == "number" && options?.sinceMins > 0 && props.storage) {
            await attemptToSaveToStorage(key, response.data);
        }
        return { data: response.data } as R;
    };

    const dispatchRequest = async <D, R>(details: RequestDispatchDetails<D>): Promise<R> => {
        const { options, url } = details;
        if (isSocketEmitPossible<D>(url, (details as any)?.body || null, options)) {
            try {
                return await dispatchRequestViaSocket<D, R>(details);
            } catch (error: any) {
                const statusCode = error?.status || error?.statusCode;
                if (isNumber(statusCode) && statusCode >= 400 && statusCode < 500) {
                    const e = extractApiError(error);
                    if (statusCode == 404 && e.errors[0]?.error == "event not found") {
                    } else {
                        console.error("Event Error", error);
                        throw error;
                    }
                }
            }
        }
        return await dispatchRequestViaHttp<D, R>(details);
    };

    const createDispatcherWithCachingWithBody = (method: "post" | "put") =>
        async function <T = any, D = any>(
            url: string,
            body: D,
            options: RequestConfig<D> = { sinceMins: 0 }
        ): Promise<{
            data: T;
        }> {
            type R = {
                data: T;
            };

            const noCaching = props.noCaching?.() === true;
            const requestDetails = {
                method,
                body,
                options,
                url,
            } as const;

            if (noCaching) {
                return await dispatchRequest<D, R>({
                    ...requestDetails,
                    key: "",
                });
            }

            const matchBody = {
                url,
                body,
                query: options.params,
            };
            const key = JSON.stringify(matchBody);

            if (typeof options?.sinceMins == "number" && options?.sinceMins > 0 && !options?.now) {
                const localCache = await props.storage?.get<any>(key);
                if (localCache?.timestamp) {
                    const timestamp =
                        typeof localCache.timestamp === "number" ? localCache.timestamp : Number(localCache.timestamp);
                    if ((Date.now() - timestamp) / 60e3 < options.sinceMins) {
                        return localCache.response;
                    }
                }
            }

            return await dispatchRequest<D, R>({
                ...requestDetails,
                key,
            });
        };

    const createDispatcherWithCachingNoBody = (method: "get" | "delete") =>
        async function <T = any, D = any>(
            url: string,
            options: RequestConfig<D> = { sinceMins: 0 }
        ): Promise<{
            data: T;
        }> {
            type R = {
                data: T;
            };

            const noCaching = props.noCaching?.() === true;
            const requestDetails = {
                method,
                options,
                url,
            } as const;

            if (noCaching) {
                return await dispatchRequest<D, R>({
                    ...requestDetails,
                    key: "",
                });
            }

            const matchBody = {
                url,
                query: options.params,
            };
            const key = JSON.stringify(matchBody);

            if (typeof options?.sinceMins == "number" && options?.sinceMins > 0 && !options?.now) {
                const localCache = await props.storage?.get<any>(key);
                if (localCache?.timestamp) {
                    const timestamp =
                        typeof localCache.timestamp === "number" ? localCache.timestamp : Number(localCache.timestamp);
                    if ((Date.now() - timestamp) / 60e3 < options.sinceMins) {
                        return localCache.response;
                    }
                }
            }

            return await dispatchRequest<D, R>({
                ...requestDetails,
                key,
            });
        };

    reloadConfig();

    const state = {
        close: () => {
            try {
                socket.socket()?.destroyCurrentInstance();
            } catch {}
        },
        api: Api,
        socket: socket,
        reloadConfig,
        reloadHttpInstance,
        reloadSocket,
    };

    return state;
};
