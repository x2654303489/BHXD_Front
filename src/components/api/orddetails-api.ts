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
import type { Orderdetails } from '../models';
// @ts-ignore
import type { Response } from '../models';
/**
 * OrddetailsApi - axios parameter creator
 * @export
 */
export const OrddetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderdetailsDeleteDelete: async (id: number, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('orderdetailsDeleteDelete', 'id', id)
            const localVarPath = `/orderdetails/delete`;
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
         * @param {Orderdetails} [orderdetails] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderdetailsInsertPost: async (sessionStorage?: string, orderdetails?: Orderdetails, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/orderdetails/insert`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(orderdetails, localVarRequestOptions, configuration)

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
        orderdetailsSelectdivideGet: async (pageNum: number, pageSize?: number, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pageNum' is not null or undefined
            assertParamExists('orderdetailsSelectdivideGet', 'pageNum', pageNum)
            const localVarPath = `/orderdetails/selectdivide`;
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
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderdetailsSelectidGet: async (id?: number, sessionStorage?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/orderdetails/selectid`;
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
 * OrddetailsApi - functional programming interface
 * @export
 */
export const OrddetailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrddetailsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderdetailsDeleteDelete(id: number, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderdetailsDeleteDelete(id, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrddetailsApi.orderdetailsDeleteDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Orderdetails} [orderdetails] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderdetailsInsertPost(sessionStorage?: string, orderdetails?: Orderdetails, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderdetailsInsertPost(sessionStorage, orderdetails, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrddetailsApi.orderdetailsInsertPost']?.[localVarOperationServerIndex]?.url;
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
        async orderdetailsSelectdivideGet(pageNum: number, pageSize?: number, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderdetailsSelectdivideGet(pageNum, pageSize, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrddetailsApi.orderdetailsSelectdivideGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary selectid
         * @param {number} [id] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async orderdetailsSelectidGet(id?: number, sessionStorage?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.orderdetailsSelectidGet(id, sessionStorage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OrddetailsApi.orderdetailsSelectidGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OrddetailsApi - factory interface
 * @export
 */
export const OrddetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrddetailsApiFp(configuration)
    return {
        /**
         * 
         * @summary delete
         * @param {number} id 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderdetailsDeleteDelete(id: number, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.orderdetailsDeleteDelete(id, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary insert
         * @param {string} [sessionStorage] 
         * @param {Orderdetails} [orderdetails] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderdetailsInsertPost(sessionStorage?: string, orderdetails?: Orderdetails, options?: any): AxiosPromise<Response> {
            return localVarFp.orderdetailsInsertPost(sessionStorage, orderdetails, options).then((request) => request(axios, basePath));
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
        orderdetailsSelectdivideGet(pageNum: number, pageSize?: number, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.orderdetailsSelectdivideGet(pageNum, pageSize, sessionStorage, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary selectid
         * @param {number} [id] 
         * @param {string} [sessionStorage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        orderdetailsSelectidGet(id?: number, sessionStorage?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.orderdetailsSelectidGet(id, sessionStorage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrddetailsApi - object-oriented interface
 * @export
 * @class OrddetailsApi
 * @extends {BaseAPI}
 */
export class OrddetailsApi extends BaseAPI {
    /**
     * 
     * @summary delete
     * @param {number} id 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrddetailsApi
     */
    public orderdetailsDeleteDelete(id: number, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return OrddetailsApiFp(this.configuration).orderdetailsDeleteDelete(id, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary insert
     * @param {string} [sessionStorage] 
     * @param {Orderdetails} [orderdetails] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrddetailsApi
     */
    public orderdetailsInsertPost(sessionStorage?: string, orderdetails?: Orderdetails, options?: RawAxiosRequestConfig) {
        return OrddetailsApiFp(this.configuration).orderdetailsInsertPost(sessionStorage, orderdetails, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary selectdivide
     * @param {number} pageNum 
     * @param {number} [pageSize] 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrddetailsApi
     */
    public orderdetailsSelectdivideGet(pageNum: number, pageSize?: number, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return OrddetailsApiFp(this.configuration).orderdetailsSelectdivideGet(pageNum, pageSize, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary selectid
     * @param {number} [id] 
     * @param {string} [sessionStorage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrddetailsApi
     */
    public orderdetailsSelectidGet(id?: number, sessionStorage?: string, options?: RawAxiosRequestConfig) {
        return OrddetailsApiFp(this.configuration).orderdetailsSelectidGet(id, sessionStorage, options).then((request) => request(this.axios, this.basePath));
    }
}

