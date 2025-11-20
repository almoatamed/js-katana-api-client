import { ApiProps, createApiClient, Merge } from "./api-client/index.js";
import type { ApiDelete, ApiGet, ApiPost, ApiPut, AsyncEmit, OnEvent } from "../apiTypes.js";
export * from "./api-client/index.js";

const create = <Adapter extends "fetch" | "axios">(
    apiProps: Merge<
        {
            adapter?: Adapter;
        },
        ApiProps
    >
) => createApiClient<Adapter, ApiPost, ApiPut, ApiDelete, ApiGet, AsyncEmit, OnEvent>(apiProps);

export default create;
