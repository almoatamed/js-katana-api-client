#!/usr/bin/env node

// oxlint-disable no-async-promise-executor
import "dotenv";
const axios = (await import("axios")).default;
import { program } from "commander";

import fs from "fs";
import path from "path";
import url from "url";

const __process = process;

const currentDir = (() => {
    try {
        return url.fileURLToPath(new url.URL("./.", import.meta.url));
    } catch {
        return __dirname;
    }
})();
const parentProjectPath = path.join(currentDir, "../.");
const findProjectRoot = async (currentDir = parentProjectPath): Promise<string> => {
    const packagePath = path.join(currentDir, "package.json");

    if (fs.existsSync(packagePath)) {
        return currentDir;
    }

    const parentDir = path.dirname(currentDir);

    if (parentDir === currentDir) {
        console.error("No package.json file found in any parent directory.");
        __process.exit(1);
    }

    return findProjectRoot(parentDir);
};

const currentPackagePath = await findProjectRoot();
const mainProjectPath = await findProjectRoot(path.resolve("."));

const currentPackageDotJSONContent = fs.readFileSync(path.join(currentPackagePath, "./package.json"), "utf-8");
const currentPackageDotJSON: typeof import("../../package.json") = JSON.parse(currentPackageDotJSONContent);

const packageDotJsonFullPath = path.join(mainProjectPath, "./package.json");
const packageDotJson: {
    [key: string]: any;
    apiTypes?: {
        apiPrefix?: string;
        baseUrl: string;
        scope?: string;
    };
} = JSON.parse(fs.readFileSync(packageDotJsonFullPath, "utf-8"));

const apiTypesFilePath = path.join(currentPackagePath, "apiTypes.d.ts");

program
    .name("Js-katana Api Types Loader")
    .description("set of commands to control autocomplete and type system on API of axios.")
    .version(currentPackageDotJSON.version);

const trimSlashes = (s: string) => {
    return s.replace(/\/$/, "").replace(/^\//, "");
};

const join = (...paths: string[]) => {
    return paths.map(s => trimSlashes(s)).join("/");
};

export type RequestError = {
    statusCode: number;
    errors: {
        error: string;
        errors?: string[] | undefined;
    }[];
};

export const isNumber = function (num: any) {
    if (typeof num === "number") {
        return num - num === 0;
    }
    if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};

const isEmpty = (v: any) => {
    return v === undefined || v === null;
};

const extractApiError = (error: any): RequestError | null => {
    if (isNumber(error?.statusCode) && Array.isArray(error?.errors) && typeof error?.errors[0]?.error == "string") {
        return error as RequestError;
    }
    return null;
};

export type ChannelDescriptionProps = {
    fileUrl: string;
    path?: string;
    fullChannelPath?: string;
    requiresAuth?: boolean;
    descriptionText?: string;
    requestBodyTypeString?: string;
    additionalTypes?: string;
    responseBodyTypeString?: string;
    descriptionFileFullPath?: string;
};

export type RouteDescriptionProps = {
    fileUrl: string;
    path?: string;
    fullRoutePath?: string;
    requiresAuth?: boolean;
    descriptionText?: string;
    method: "ALL" | "GET" | "PUT" | "POST" | "DELETE";
    requestParamsTypeString?: string;
    requestBodyTypeString?: string;
    requestHeadersTypeString?: string;
    responseContentType?: string;
    additionalTypes?: string;
    responseBodyTypeString?: string;
    descriptionFileFullPath?: string;
};

export type EventDescriptionProps = {
    fileUrl: string;
    event: string;
    rooms?: string[];
    descriptionText?: string;
    eventBodyTypeString: string;
    additionalTypes?: string;
    expectedResponseBodyTypeString?: string;
    descriptionFileFullPath?: string;
};

program
    .command("load-types")
    .alias("l")
    .option("-s", "--scope <SCOPE>")
    .option("--apiPrefix <apiPrefix>")
    .option("-b", "--baseUrl <BASEURL>")
    .description("use it to load api types from server")
    .action(async ({ scope, apiPrefix, baseUrl }: { [key: string]: string }) => {
        if (!packageDotJson["apiTypes"]) {
            console.warn(
                "its better to provide api types loading config in package.json before loading api types as in ",
                `
{
    "apiPrefix"?: string;
    "baseUrl": string; 
    "scope"?: string;
}

For example 

// package.json content 
{
    ...
    "apiTypes": {
        "apiPrefix": "server/api", // default "/"
        "baseUrl": "http://localhost:3000", // your js-katana server host and port
        "scope": "dashboard",  // default null (no scope all routes)
    }
    ...
}

you can drop the scope if you do not want scoped access 
`
            );
        }

        const apiTypesDirFullPath = path.join(currentPackagePath, "/apiTypes");
        fs.mkdirSync(apiTypesDirFullPath, { recursive: true });
        if (!scope) {
            if (!isEmpty(packageDotJson["apiTypes"]?.["scope"])) {
                scope = packageDotJson["apiTypes"]?.scope;
            } else {
                scope = "";
            }
        }

        if (!scope) {
            scope = "";
        }

        if (!baseUrl) {
            if (!isEmpty(packageDotJson["apiTypes"]?.baseUrl)) {
                baseUrl = packageDotJson["apiTypes"]?.baseUrl;
            } else {
                console.warn("there is no baseUrl provided, using default `http://localhost:3000` ");
                baseUrl = "http://localhost:3000";
            }
        }

        if (!apiPrefix) {
            if (!isEmpty(packageDotJson["apiTypes"]?.["apiPrefix"])) {
                apiPrefix = packageDotJson["apiTypes"]?.["apiPrefix"];
            } else {
                console.warn("there is no apiPrefix provided using `/api`");
                apiPrefix = "/api";
            }
        }

        let fullBasePath: string = baseUrl;
        if (apiPrefix) {
            fullBasePath = join(baseUrl, apiPrefix);
        }

        const dotEnv: any = process.env;

        const getFromEnv = (key: string): string | undefined | null => {
            return dotEnv[key] || dotEnv[key.toLowerCase()] || dotEnv[key.toUpperCase()];
        };

        let secret = getFromEnv("description_secret");
        if (!secret) {
            console.warn(
                'there is no secret provided, if it is required provide description secret in your environment DESCRIPTION_SECRET="YOUR SECRET"'
            );
        }

        const buildTypes = async () => {
            console.log("Building Types");

            type RouterDescriptionMap = {
                [key: string]: RouteDescriptionProps;
            };

            type ChannelDescriptionMap = {
                [key: string]: ChannelDescriptionProps;
            };

            type EventDescriptionMap = {
                [key: string]: EventDescriptionProps;
            };

            type ApiGlobalDescription = {
                routesDescriptions: RouterDescriptionMap;
                channelsDescriptions: ChannelDescriptionMap;
                eventsDescriptions: EventDescriptionMap;
            };

            const descriptionRoute = join(fullBasePath, `/__describe-json`);
            console.log("Description Route:", descriptionRoute);

            const globalDescription: ApiGlobalDescription = (
                await axios({
                    method: "get",
                    url: descriptionRoute,
                    headers: secret
                        ? {
                              authorization: `Secret ${secret}`,
                          }
                        : undefined,
                })
            ).data;

            const apiDescription = globalDescription.routesDescriptions;
            const channelsDescription = globalDescription.channelsDescriptions;
            const eventsDescription = globalDescription.eventsDescriptions;

            const content = [
                `
export type Merge<T, U> = T & Omit<U, keyof T>;

export type AsyncEmitOptions = {
    timeout?: number;
    sinceMins?: number;
    now?: boolean;
    quiet?: boolean;
    notScoped?: boolean;
};




export type RequestConfig<D> = {
    sinceMins?: number;
    now?: boolean;
    requestVia?: ("http"|"socket")[]
    quiet?: boolean;
    stream?: boolean;
} & {
    data?: D;
    params?: any; 
    headers?: Record<string, string>;
};

export type Response<T> = {
    data: T;
}


type OmitFunctions<T> = T;

        `,
            ];

            console.log(
                `\n\n################################ Looking for Scope "${scope}" ################################`
            );

            const routesArray = Object.values(apiDescription).filter(r => {
                const result = trimSlashes(r.fullRoutePath || "")?.startsWith(trimSlashes(scope));
                console.log("Route: ", r.fullRoutePath, result);
                return result;
            });

            const channelsArray = Object.values(channelsDescription).filter(c => {
                const result = trimSlashes(c.fullChannelPath || "")?.startsWith(trimSlashes(scope));
                console.log("Channel: ", c.fullChannelPath, result);
                return result;
            });

            const eventsArray = Object.values(eventsDescription);

            console.log(
                "###########################################################################################\n\n\n"
            );

            for (const r of routesArray) {
                for (const key in r) {
                    if (key.endsWith("TypeString")) {
                        r[key] = r[key]?.replace(/;$/, "");
                        r[key] = `OmitFunctions<${r[key]}>`;
                    }
                }
                r.fullRoutePath = trimSlashes(r.fullRoutePath || "")?.slice(trimSlashes(scope).length);
                if(r.fullRoutePath == ""){
                    r.fullRoutePath = "/"
                }
                r.fullRoutePath = r.fullRoutePath.replace(/:\b[_\-a-zA-Z0-9]+?\b|\[\b[_\-a-zA-Z0-9]+?\b\]/g, _match => {
                    console.log("replacing", _match, "in", r.fullRoutePath, "with parma string");
                    return "${string}";
                });
                if (r.fullRoutePath.includes("${string}")) {
                    r.fullRoutePath = `[key: \`${r.fullRoutePath}\`]`;
                } else {
                    r.fullRoutePath = `"${r.fullRoutePath}"`;
                }
            }

            for (const c of channelsArray) {
                for (const key in c) {
                    if (key.endsWith("TypeString")) {
                        c[key] = c[key]?.replace(/;$/, "");
                        c[key] = `OmitFunctions<${c[key]}>`;
                    }
                }
                c.fullChannelPath = trimSlashes(c.fullChannelPath || "")?.slice(trimSlashes(scope).length);
                c.fullChannelPath = trimSlashes(c.fullChannelPath || "")?.slice(trimSlashes(scope).length);
                c.fullChannelPath = c.fullChannelPath.replace(
                    /:\b[_\-a-zA-Z0-9]+?\b|\[\b[_\-a-zA-Z0-9]+?\b\]/g,
                    _match => {
                        console.log("replacing", _match, "in", c.fullChannelPath, "with parma string");
                        return "${string}";
                    }
                );
                if (c.fullChannelPath.includes("${string}")) {
                    c.fullChannelPath = `[key: \`${c.fullChannelPath}\`]`;
                } else {
                    c.fullChannelPath = `"${c.fullChannelPath}"`;
                }
            }

            for (const e of eventsArray) {
                for (const key in e) {
                    if (key.endsWith("TypeString")) {
                        e[key] = e[key]?.replace(/;$/, "");
                        e[key] = `OmitFunctions<${e[key]}>`;
                    }
                }
            }

            content.push(`

${channelsArray
    .map(c => {
        return c.additionalTypes;
    })
    .filter(e => !!e)
    .join("\n\n")}

${routesArray
    .map(c => {
        return c.additionalTypes;
    })
    .filter(e => !!e)
    .join("\n\n")}    


${eventsArray
    .map(c => {
        return c.additionalTypes;
    })
    .filter(e => !!e)
    .join("\n\n")}    
    
        


`);

            if (!eventsArray.length) {
                content.push(`
export type OnEvent = (
    event: string,
    cb: (body: any, cb?: (body?: any) => Promise<void>) => any | Promise<any>
) => Promise<() => void>;

        `);
            } else {
                content.push(`


export type OnEventNames = ${eventsArray.map(c => `"${c.event}"`).join(" | ")};

export type OnEventBodyMap = {${eventsArray
                    .map(r => {
                        return `
"${r.event}": ${r.eventBodyTypeString};`;
                    })
                    .join("")}
};

export type OnEventExpectedResponseMap = {${eventsArray
                    .map(r => {
                        return `
"${r.event}": ${r.expectedResponseBodyTypeString};`;
                    })
                    .join("")}
};

export type OnEventBody<U extends string> = U extends keyof OnEventBodyMap ? OnEventBodyMap[U] : any;

export type OnEventExpectedResponse<U extends string> = U extends keyof OnEventExpectedResponseMap ? OnEventExpectedResponseMap[U] : undefined;

export type OnEvent = <U extends OnEventNames | string>(
    event: U,
    cb: (
            body: OnEventBody<U>,  
            cb: OnEventExpectedResponse<U> extends never ? never : OnEventExpectedResponse<U> extends undefined ? (((body?: any) => Promise<void>) | undefined) : ((body?: OnEventExpectedResponse<U>) => Promise<void>)
        ) => any | Promise<any>
) => Promise<() => void>;

`);
            }

            //!!
            //!!
            //!!

            if (!channelsArray.length) {
                content.push(`
export type AsyncEmit = <T = any>(event: string, body?: any, options?: AsyncEmitOptions) => Promise<T>;
                    `);
            } else {
                content.push(`
    
export type AsyncEmitEvents = ${channelsArray.map(c => `${c.fullChannelPath}`).join(" | ")};

export type AsyncEmitBodyMap = {${channelsArray
                    .map(r => {
                        return `
${r.fullChannelPath}: ${r.requestBodyTypeString};`;
                    })
                    .join("")}
};

export type AsyncEmitResponseMap = {${channelsArray
                    .map(r => {
                        return `
${r.fullChannelPath}: ${r.responseBodyTypeString};`;
                    })
                    .join("")}
};

export type AsyncEmitBody<U extends string> = U extends keyof AsyncEmitBodyMap ? AsyncEmitBodyMap[U] : any;

export type AsyncEmitResponse<U extends string> = U extends keyof AsyncEmitResponseMap ? AsyncEmitResponseMap[U] : any;

export type AsyncEmit = <U extends AsyncEmitEvents | string>(
    url: U,
    body?: AsyncEmitBody<U>,
    config?: AsyncEmitOptions,
) => Promise<AsyncEmitResponse<U>>;
                    
    `);
            }

            //!!
            //!!
            //!!

            const postRoutes = routesArray.filter(r => {
                return r.method == "POST" || r.method == "ALL";
            });
            if (!postRoutes.length) {
                content.push(`

export type ApiPost = <T = any, R = Response<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;

            `);
            } else {
                content.push(`

export type ApiPostUrl = ${postRoutes.map(r => `${r.fullRoutePath}`).join(" | ")};

export type ApiPostBodyMap = {${postRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiPostResponseMap = {${postRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.responseBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiPostHeadersMap = {${postRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestHeadersTypeString} & {
    [key: string]: string; 
};`;
                    })
                    .join("")}
};

export type ApiPostParamsMap = {${postRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestParamsTypeString};`;
                    })
                    .join("")}
};

export type ApiPostBody<U extends string> = U extends keyof ApiPostBodyMap ? ApiPostBodyMap[U] : any;

export type ApiPostResponse<U extends string> = U extends keyof ApiPostResponseMap ? ApiPostResponseMap[U] : any;

export type ApiPostHeaders<U extends string> = U extends keyof ApiPostHeadersMap ? ApiPostHeadersMap[U] : any;

export type ApiPostParams<U extends string> = U extends keyof ApiPostParamsMap ? ApiPostParamsMap[U] : any;

export type ApiPostResponseExtractor<Url extends keyof ApiPostResponseMap> = ApiPostResponseMap[Url];

export type ApiPost = <U extends ApiPostUrl | string>(
    url: U,
    data?: ApiPostBody<U>,
    config?: AsyncEmitOptions &  Merge<{
        ${
            postRoutes.some(r => r.requestHeadersTypeString != "OmitFunctions<any>")
                ? "headers?: ApiPostHeaders<U>; "
                : ""
        }
        params?: ApiPostParams<U>; 
    }, RequestConfig<ApiPostBody<U>>>
) => Promise<Response<ApiPostResponse<U>>>;


            `);
            }

            //
            //
            //

            const putRoutes = routesArray.filter(r => {
                return r.method == "PUT" || r.method == "ALL";
            });
            if (!putRoutes.length) {
                content.push(`

export type ApiPut = <T = any, R = Response<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;

            `);
            } else {
                content.push(`


export type ApiPutUrl = ${putRoutes.map(r => `${r.fullRoutePath}`).join(" | ")};

export type ApiPutBodyMap = {${putRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiPutResponseMap = {${putRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.responseBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiPutHeadersMap = {${putRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestHeadersTypeString} & {
    [key: string]: string; 
};`;
                    })
                    .join("")}
};

export type ApiPutParamsMap = {${putRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestParamsTypeString};`;
                    })
                    .join("")}
};

export type ApiPutBody<U extends string> = U extends keyof ApiPutBodyMap ? ApiPutBodyMap[U] : any;

export type ApiPutResponse<U extends string> = U extends keyof ApiPutResponseMap ? ApiPutResponseMap[U] : any;

export type ApiPutHeaders<U extends string> = U extends keyof ApiPutHeadersMap ? ApiPutHeadersMap[U] : any;

export type ApiPutParams<U extends string> = U extends keyof ApiPutParamsMap ? ApiPutParamsMap[U] : any;

export type ApiPut = <U extends ApiPutUrl | string>(
    url: U,
    data?: ApiPutBody<U>,
    config?: AsyncEmitOptions & Merge<{
        ${putRoutes.some(r => r.requestHeadersTypeString != "OmitFunctions<any>") ? "headers?: ApiPutHeaders<U>; " : ""}
        params?: ApiPutParams<U>; 
    }, RequestConfig<ApiPutBody<U>>>
) => Promise<Response<ApiPutResponse<U>>>;

            `);
            }

            //
            //
            //

            const getRoutes = routesArray.filter(r => {
                return r.method == "GET" || r.method == "ALL";
            });
            if (!getRoutes.length) {
                content.push(`

export type ApiGet = <T = any, R = Response<T>, D = any>(url: string, config?: AsyncEmitOptions & RequestConfig<D>) => Promise<R>;;

            `);
            } else {
                content.push(`

         

export type ApiGetUrl = ${getRoutes.map(r => `${r.fullRoutePath}`).join(" | ")};

export type ApiGetBodyMap = {${getRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiGetResponseMap = {${getRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.responseBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiGetHeadersMap = {${getRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestHeadersTypeString} & {
    [key: string]: string; 
};`;
                    })
                    .join("")}
};

export type ApiGetParamsMap = {${getRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestParamsTypeString};`;
                    })
                    .join("")}
};

export type ApiGetBody<U extends string> = U extends keyof ApiGetBodyMap ? ApiGetBodyMap[U] : any;

export type ApiGetResponse<U extends string> = U extends keyof ApiGetResponseMap ? ApiGetResponseMap[U] : any;

export type ApiGetHeaders<U extends string> = U extends keyof ApiGetHeadersMap ? ApiGetHeadersMap[U] : any;

export type ApiGetParams<U extends string> = U extends keyof ApiGetParamsMap ? ApiGetParamsMap[U] : any;

export type ApiGet = <U extends ApiGetUrl | string>(
    url: U,
    config?: AsyncEmitOptions & Merge<{
        ${getRoutes.some(r => r.requestHeadersTypeString != "OmitFunctions<any>") ? "headers?: ApiGetHeaders<U>; " : ""}
        params?: ApiGetParams<U>; 
    }, RequestConfig<ApiGetBody<U>>>
) => Promise<Response<ApiGetResponse<U>>>;

            `);
            }

            //
            //
            //

            const deleteRoutes = routesArray.filter(r => {
                return r.method == "DELETE" || r.method == "ALL";
            });
            if (!deleteRoutes.length) {
                content.push(`

export type ApiDelete = <T = any, R = Response<T>, D = any>(url: string, config?: AsyncEmitOptions & RequestConfig<D>) => Promise<R>;;

            `);
            } else {
                content.push(`
         
export type ApiDeleteUrl = ${deleteRoutes.map(r => `${r.fullRoutePath}`).join(" | ")};

export type ApiDeleteBodyMap = {${deleteRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiDeleteResponseMap = {${deleteRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.responseBodyTypeString};`;
                    })
                    .join("")}
};

export type ApiDeleteHeadersMap = {${deleteRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestHeadersTypeString} & {
    [key: string]: string; 
};`;
                    })
                    .join("")}
};

export type ApiDeleteParamsMap = {${deleteRoutes
                    .map(r => {
                        return `
${r.fullRoutePath}: ${r.requestParamsTypeString};`;
                    })
                    .join("")}
};

export type ApiDeleteBody<U extends string> = U extends keyof ApiDeleteBodyMap ? ApiDeleteBodyMap[U] : any;

export type ApiDeleteResponse<U extends string> = U extends keyof ApiDeleteResponseMap ? ApiDeleteResponseMap[U] : any;

export type ApiDeleteHeaders<U extends string> = U extends keyof ApiDeleteHeadersMap ? ApiDeleteHeadersMap[U] : any;

export type ApiDeleteParams<U extends string> = U extends keyof ApiDeleteParamsMap ? ApiDeleteParamsMap[U] : any;

export type ApiDelete = <U extends ApiDeleteUrl | string>(
    url: U,
    config?: AsyncEmitOptions & Merge<{
        ${
            deleteRoutes.some(r => r.requestHeadersTypeString != "OmitFunctions<any>")
                ? "headers?: ApiDeleteHeaders<U>; "
                : ""
        }
        params?: ApiDeleteParams<U>; 
    }, RequestConfig<ApiDeleteBody<U>>>
) => Promise<Response<ApiDeleteResponse<U>>>;

            `);
            }

            console.log("Writing Types....");
            fs.writeFileSync(apiTypesFilePath, content.join("\n"));
        };

        try {
            await buildTypes();
        } catch (error: any) {
            extractApiError(error);
            console.log(error?.message);
        }

        console.log("\n\nDone!!");
    });

program
    .command("reset-types")
    .alias("r")
    .description("reset types to be `any`")
    .action(async () => {
        fs.writeFileSync(
            apiTypesFilePath,
            `

export type Response<T> = {
    data: T 
}

export type RequestConfig<D> = {
    sinceMins?: number;
    now?: boolean;
    requestVia?: ("http"|"socket")[]
    quiet?: boolean;
    stream?: boolean;
} & {
    data?: D; 
    params?: any; 
    headers?: Record<string, string>;
};

export type ApiPost = <T = any, R = Response<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;

export type ApiPut = <T = any, R = Response<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;
export type ApiDelete = <T = any, R = Response<T>, D = any>(url: string, config?: AsyncEmitOptions & RequestConfig<D>) => Promise<R>;
export type ApiGet = <T = any, R = Response<T>, D = any>(url: string, config?: AsyncEmitOptions & RequestConfig<D>) => Promise<R>;

export type AsyncEmit = <T = any>(event: string, body?: any, options?: AsyncEmitOptions) => Promise<T>;

export type OnEvent = (
    event: string,
    cb: (body: any, cb?: (body?: any) => Promise<void>) => any | Promise<any>
) => Promise<() => void>;

export type AsyncEmitOptions = {
    timeout?: number;
    sinceMins?: number;
    now?: boolean;
    quiet?: boolean;
    notScoped?: boolean;
};

        `
        );
    });
program.parse();

export default {};
