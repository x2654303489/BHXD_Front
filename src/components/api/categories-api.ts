/* tslint:disable */
/* eslint-disable */
/**
 * 崩坏晓店
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { Categories } from '../models';
// @ts-ignore
import type { Response } from '../models';
/**
 * CategoriesApi - axios parameter creator
 * @export
 */
export const CategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesDeleteDelete: async (id: number, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('categoriesDeleteDelete', 'id', id)
            const localVarPath = `/categories/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Categories} [categories] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesInsertPost: async (sessionStorage?: string, categories?: Categories, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories/insert`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(categories, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary selectdivide
         * @param {string} [pageNum] 
         * @param {string} [pageSize] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesSelectdivideGet: async (pageNum?: string, pageSize?: string, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories/selectdivide`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageNum !== undefined) {
                localVarQueryParameter['pageNum'] = pageNum;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary selectid
         * @param {number} [id] 
         * @param {boolean} [isstatus] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesSelectidGet: async (id?: number, isstatus?: boolean, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories/selectid`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (isstatus !== undefined) {
                localVarQueryParameter['isstatus'] = isstatus;
            }

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary updates
         * @param {string} [sessionStorage] 
         * @param {Categories} [categories] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesUpdatePut: async (sessionStorage?: string, categories?: Categories, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/categories/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(categories, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary updatestatus
         * @param {number} id 
         * @param {boolean} status 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesUpdatestatusPut: async (id: number, status: boolean, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('categoriesUpdatestatusPut', 'id', id)
            // verify required parameter 'status' is not null or undefined
            assertParamExists('categoriesUpdatestatusPut', 'status', status)
            const localVarPath = `/categories/updatestatus`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CategoriesApi - functional programming interface
 * @export
 */
export const CategoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CategoriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesDeleteDelete(id: number, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesDeleteDelete(id, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoriesApi.categoriesDeleteDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Categories} [categories] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesInsertPost(sessionStorage?: string, categories?: Categories, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesInsertPost(sessionStorage, categories, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoriesApi.categoriesInsertPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary selectdivide
         * @param {string} [pageNum] 
         * @param {string} [pageSize] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesSelectdivideGet(pageNum?: string, pageSize?: string, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesSelectdivideGet(pageNum, pageSize, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoriesApi.categoriesSelectdivideGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary selectid
         * @param {number} [id] 
         * @param {boolean} [isstatus] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesSelectidGet(id?: number, isstatus?: boolean, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesSelectidGet(id, isstatus, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoriesApi.categoriesSelectidGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary updates
         * @param {string} [sessionStorage] 
         * @param {Categories} [categories] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesUpdatePut(sessionStorage?: string, categories?: Categories, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesUpdatePut(sessionStorage, categories, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoriesApi.categoriesUpdatePut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary updatestatus
         * @param {number} id 
         * @param {boolean} status 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async categoriesUpdatestatusPut(id: number, status: boolean, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.categoriesUpdatestatusPut(id, status, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['CategoriesApi.categoriesUpdatestatusPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * CategoriesApi - factory interface
 * @export
 */
export const CategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CategoriesApiFp(configuration)
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesDeleteDelete(id: number, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.categoriesDeleteDelete(id, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Categories} [categories] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesInsertPost(sessionStorage?: string, categories?: Categories, options?: any): AxiosPromise<Response> {
            return localVarFp.categoriesInsertPost(sessionStorage, categories, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary selectdivide
         * @param {string} [pageNum] 
         * @param {string} [pageSize] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesSelectdivideGet(pageNum?: string, pageSize?: string, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.categoriesSelectdivideGet(pageNum, pageSize, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary selectid
         * @param {number} [id] 
         * @param {boolean} [isstatus] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesSelectidGet(id?: number, isstatus?: boolean, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.categoriesSelectidGet(id, isstatus, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary updates
         * @param {string} [sessionStorage] 
         * @param {Categories} [categories] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesUpdatePut(sessionStorage?: string, categories?: Categories, options?: any): AxiosPromise<Response> {
            return localVarFp.categoriesUpdatePut(sessionStorage, categories, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary updatestatus
         * @param {number} id 
         * @param {boolean} status 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        categoriesUpdatestatusPut(id: number, status: boolean, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.categoriesUpdatestatusPut(id, status, sessionStorage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoriesApi - object-oriented interface
 * @export
 * @class CategoriesApi
 * @extends {BaseAPI}
 */
export class CategoriesApi extends BaseAPI {
    /**
     * 
     * @summary delete
     * @param {number} id 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesDeleteDelete(id: number, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesDeleteDelete(id, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary insert
     * @param {string} [sessionStorage] 
     * @param {Categories} [categories] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesInsertPost(sessionStorage?: string, categories?: Categories, options?: RawAxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesInsertPost(sessionStorage, categories, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary selectdivide
     * @param {string} [pageNum] 
     * @param {string} [pageSize] 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesSelectdivideGet(pageNum?: string, pageSize?: string, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesSelectdivideGet(pageNum, pageSize, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary selectid
     * @param {number} [id] 
     * @param {boolean} [isstatus] 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesSelectidGet(id?: number, isstatus?: boolean, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesSelectidGet(id, isstatus, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary updates
     * @param {string} [sessionStorage] 
     * @param {Categories} [categories] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesUpdatePut(sessionStorage?: string, categories?: Categories, options?: RawAxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesUpdatePut(sessionStorage, categories, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary updatestatus
     * @param {number} id 
     * @param {boolean} status 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoriesApi
     */
    public categoriesUpdatestatusPut(id: number, status: boolean, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return CategoriesApiFp(this.configuration).categoriesUpdatestatusPut(id, status, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }
}
