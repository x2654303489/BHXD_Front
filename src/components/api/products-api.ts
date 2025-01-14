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
import type { Products } from '../models';
// @ts-ignore
import type { Response } from '../models';
/**
 * ProductsApi - axios parameter creator
 * @export
 */
export const ProductsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsDeleteDelete: async (id: number, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('productsDeleteDelete', 'id', id)
            const localVarPath = `/products/delete`;
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
         * @param {Products} [products] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsInsertPost: async (sessionStorage?: string, products?: Products, file?:File , options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/insert`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(products, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary selectdivide
         * @param {number} pageNum 
         * @param {number} [pageSize] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsSelectdivideGet: async (pageNum: number, pageSize?: number, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pageNum' is not null or undefined
            assertParamExists('productsSelectdivideGet', 'pageNum', pageNum)
            const localVarPath = `/products/selectdivide`;
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
        productsSelectidGet: async (id?: number, isstatus?: boolean, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/selectid`;
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
         * @param {Products} [products] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsUpdatePut: async (sessionStorage?: string, products?: Products, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/products/update`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(products, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary updatestatus
         * @param {number} id 
         * @param {string} status 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsUpdatestatusPut: async (id: number, status: string, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('productsUpdatestatusPut', 'id', id)
            // verify required parameter 'status' is not null or undefined
            assertParamExists('productsUpdatestatusPut', 'status', status)
            const localVarPath = `/products/updatestatus`;
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
        /**
         * 
         * @summary upload
         * @param {number} id 
         * @param {File} file 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsUploadPost: async ( file: File, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
           
            // verify required parameter 'file' is not null or undefined
            assertParamExists('productsUploadPost', 'file', file)
            const localVarPath = `/products/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            

            if (sessionStorage != null) {
                localVarHeaderParameter['sessionStorage'] = String(sessionStorage);
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductsApi - functional programming interface
 * @export
 */
export const ProductsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsDeleteDelete(id: number, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsDeleteDelete(id, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsDeleteDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Products} [products] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @file {file}
         */
        async productsInsertPost(sessionStorage?: string, products?: Products, file?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsInsertPost(sessionStorage, products,file , options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsInsertPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary selectdivide
         * @param {number} pageNum 
         * @param {number} [pageSize] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsSelectdivideGet(pageNum: number, pageSize?: number, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsSelectdivideGet(pageNum, pageSize, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsSelectdivideGet']?.[localVarOperationServerIndex]?.url;
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
        async productsSelectidGet(id?: number, isstatus?: boolean, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsSelectidGet(id, isstatus, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsSelectidGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary updates
         * @param {string} [sessionStorage] 
         * @param {Products} [products] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsUpdatePut(sessionStorage?: string, products?: Products, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsUpdatePut(sessionStorage, products, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsUpdatePut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary updatestatus
         * @param {number} id 
         * @param {string} status 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsUpdatestatusPut(id: number, status: string, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsUpdatestatusPut(id, status, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsUpdatestatusPut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary upload
         * @param {number} id 
         * @param {File} file 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async productsUploadPost( file: File, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.productsUploadPost( file, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ProductsApi.productsUploadPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    
    }
};

/**
 * ProductsApi - factory interface
 * @export
 */
export const ProductsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductsApiFp(configuration)
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsDeleteDelete(id: number, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.productsDeleteDelete(id, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Products} [products] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsInsertPost(sessionStorage?: string, products?: Products, options?: any): AxiosPromise<Response> {
            return localVarFp.productsInsertPost(sessionStorage, products, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary selectdivide
         * @param {number} pageNum 
         * @param {number} [pageSize] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsSelectdivideGet(pageNum: number, pageSize?: number, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.productsSelectdivideGet(pageNum, pageSize, sessionStorage, options).then((request) => request(axios, basePath));
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
        productsSelectidGet(id?: number, isstatus?: boolean, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.productsSelectidGet(id, isstatus, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary updates
         * @param {string} [sessionStorage] 
         * @param {Products} [products] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsUpdatePut(sessionStorage?: string, products?: Products, options?: any): AxiosPromise<Response> {
            return localVarFp.productsUpdatePut(sessionStorage, products, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary updatestatus
         * @param {number} id 
         * @param {string} status 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsUpdatestatusPut(id: number, status: string, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.productsUpdatestatusPut(id, status, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary upload
         * @param {number} id 
         * @param {File} file 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        productsUploadPost(id: number, file: File, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.productsUploadPost(id, file, sessionStorage, options).then((request) => request(axios, basePath));
        },
    
    };
};

/**
 * ProductsApi - object-oriented interface
 * @export
 * @class ProductsApi
 * @extends {BaseAPI}
 */
export class ProductsApi extends BaseAPI {
    /**
     * 
     * @summary delete
     * @param {number} id 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsDeleteDelete(id: number, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsDeleteDelete(id, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary insert
     * @param {string} [sessionStorage] 
     * @param {Products} [products] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsInsertPost(sessionStorage?: string, products?: Products, file?: File , options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsInsertPost(sessionStorage, products,file, options).then((request) => request(this.axios, this.basePath));
    }
    
    /**
     * 
     * @summary selectdivide
     * @param {number} pageNum 
     * @param {number} [pageSize] 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsSelectdivideGet(pageNum: number, pageSize?: number, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsSelectdivideGet(pageNum, pageSize, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary selectid
     * @param {number} [id] 
     * @param {boolean} [isstatus] 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsSelectidGet(id?: number, isstatus?: boolean, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsSelectidGet(id, isstatus, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary updates
     * @param {string} [sessionStorage] 
     * @param {Products} [products] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsUpdatePut(sessionStorage?: string, products?: Products, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsUpdatePut(sessionStorage, products, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary updatestatus
     * @param {number} id 
     * @param {string} status 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsUpdatestatusPut(id: number, status: string, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsUpdatestatusPut(id, status, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }
    
    /**
     * 
     * @summary upload
     * @param {number} id 
     * @param {File} file 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public productsUploadPost( file: File, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return ProductsApiFp(this.configuration).productsUploadPost( file, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }
}

