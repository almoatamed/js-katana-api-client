
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
} & {
    data?: D;
    params?: any; 
    headers?: Record<string, string>;
};

export type Response<T> = {
    data: T;
}


type OmitFunctions<T> = T;

        




    


    
    
        






export type OnEventNames = "hello-id" | "hello-2";

export type OnEventBodyMap = {
"hello-id": OmitFunctions<{
  msg: string
}>;
"hello-2": OmitFunctions<{
  msg: string
}>;
};

export type OnEventExpectedResponseMap = {
"hello-id": OmitFunctions<{
  reply: string
}>;
"hello-2": OmitFunctions<{
  reply: string
}>;
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



    
export type AsyncEmitEvents = [key: `x/${string}`] | "";

export type AsyncEmitBodyMap = {
[key: `x/${string}`]: OmitFunctions<{
  message: string
}>;
"": OmitFunctions<{
  message: string
}>;
};

export type AsyncEmitResponseMap = {
[key: `x/${string}`]: OmitFunctions<{
  reply: string;
  b: any
}>;
"": OmitFunctions<{
  reply: string;
  body: any
}>;
};

export type AsyncEmitBody<U extends string> = U extends keyof AsyncEmitBodyMap ? AsyncEmitBodyMap[U] : any;

export type AsyncEmitResponse<U extends string> = U extends keyof AsyncEmitResponseMap ? AsyncEmitResponseMap[U] : any;

export type AsyncEmit = <U extends AsyncEmitEvents | string>(
    url: U,
    body?: AsyncEmitBody<U>,
    config?: AsyncEmitOptions,
) => Promise<AsyncEmitResponse<U>>;
                    
    


export type ApiPostUrl = "/";

export type ApiPostBodyMap = {
"/": OmitFunctions<{
  msg: "props" | "sdf"
}>;
};

export type ApiPostResponseMap = {
"/": OmitFunctions<{
  user: {
  name: string;
  age: number;
  email: string
}
}>;
};

export type ApiPostHeadersMap = {
"/": OmitFunctions<{
  Authorization?: undefined | number
}> & {
    [key: string]: string; 
};
};

export type ApiPostParamsMap = {
"/": OmitFunctions<{
  x: "fuck" | "you"
}>;
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
        headers?: ApiPostHeaders<U>; 
        params?: ApiPostParams<U>; 
    }, RequestConfig<ApiPostBody<U>>>
) => Promise<Response<ApiPostResponse<U>>>;


            


export type ApiPut = <T = any, R = Response<T>, D = any>(
    url: string,
    data?: D,
    config?: AsyncEmitOptions & RequestConfig<D>
) => Promise<R>;

            


         

export type ApiGetUrl = [key: `x/${string}`] | "image";

export type ApiGetBodyMap = {
[key: `x/${string}`]: OmitFunctions<{
  msg: "specific" | "props"
}>;
"image": OmitFunctions<unknown>;
};

export type ApiGetResponseMap = {
[key: `x/${string}`]: OmitFunctions<{
  user: {
  name: string;
  age: number;
  email: string
}
}>;
"image": OmitFunctions<any>;
};

export type ApiGetHeadersMap = {
[key: `x/${string}`]: OmitFunctions<{
  Authorization?: undefined | string
}> & {
    [key: string]: string; 
};
"image": OmitFunctions<unknown> & {
    [key: string]: string; 
};
};

export type ApiGetParamsMap = {
[key: `x/${string}`]: OmitFunctions<{
  x: number
}>;
"image": OmitFunctions<unknown>;
};

export type ApiGetBody<U extends string> = U extends keyof ApiGetBodyMap ? ApiGetBodyMap[U] : any;

export type ApiGetResponse<U extends string> = U extends keyof ApiGetResponseMap ? ApiGetResponseMap[U] : any;

export type ApiGetHeaders<U extends string> = U extends keyof ApiGetHeadersMap ? ApiGetHeadersMap[U] : any;

export type ApiGetParams<U extends string> = U extends keyof ApiGetParamsMap ? ApiGetParamsMap[U] : any;

export type ApiGet = <U extends ApiGetUrl | string>(
    url: U,
    config?: AsyncEmitOptions & Merge<{
        headers?: ApiGetHeaders<U>; 
        params?: ApiGetParams<U>; 
    }, RequestConfig<ApiGetBody<U>>>
) => Promise<Response<ApiGetResponse<U>>>;

            


export type ApiDelete = <T = any, R = Response<T>, D = any>(url: string, config?: AsyncEmitOptions & RequestConfig<D>) => Promise<R>;;

            