/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  /** @format int64 */
  id?: number
  username?: string
  password?: string
  accountType?: string
}

export interface Artist {
  /** @format int64 */
  id?: number
  account?: Account
  name?: string
  portfolios?: Portfolio[]
}

export interface Portfolio {
  /** @format int64 */
  id?: number
  artist?: Artist
  url?: string
}

export interface ArtistDTO {
  /** @format int64 */
  id?: number
  name?: string
  portfolios?: PortfolioDTO[]
}

export interface PortfolioDTO {
  /** @format int64 */
  id?: number
  url?: string
}

export type GetPortfolioByIdData = Portfolio

export type UpdatePortfolioData = Portfolio

export type DeletePortfolioData = any

export type GetArtistByIdData = ArtistDTO

export type UpdateArtistData = Artist

export type DeleteArtistData = any

export type UpdatePortfolio1Data = Portfolio

export type DeletePortfolio1Data = any

export type GetAllPortfoliosData = Portfolio[]

export type CreatePortfolioData = Portfolio

export type GetAllArtistsData = Artist[]

export type CreateArtistData = Artist

export type GetPortfoliosByArtistIdData = PortfolioDTO[]

export type AddPortfolioToArtistData = Portfolio

export type HealthData = string

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '/',
    })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] =
        property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        )
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title LightBlue팀 백엔드
 * @version 1.0.0
 * @baseUrl /
 *
 * LightBlue팀 백엔드 API 명세서
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags health-controller
   * @name Health
   * @request GET:/
   * @secure
   */
  health = (params: RequestParams = {}) =>
    this.request<HealthData, any>({
      path: `/`,
      method: 'GET',
      secure: true,
      ...params,
    })

  api = {
    /**
     * No description
     *
     * @tags portfolio-controller
     * @name GetPortfolioById
     * @request GET:/api/portfolios/{id}
     * @secure
     */
    getPortfolioById: (id: number, params: RequestParams = {}) =>
      this.request<GetPortfolioByIdData, any>({
        path: `/api/portfolios/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags portfolio-controller
     * @name UpdatePortfolio
     * @request PUT:/api/portfolios/{id}
     * @secure
     */
    updatePortfolio: (
      id: number,
      data: Portfolio,
      params: RequestParams = {}
    ) =>
      this.request<UpdatePortfolioData, any>({
        path: `/api/portfolios/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags portfolio-controller
     * @name DeletePortfolio
     * @request DELETE:/api/portfolios/{id}
     * @secure
     */
    deletePortfolio: (id: number, params: RequestParams = {}) =>
      this.request<DeletePortfolioData, any>({
        path: `/api/portfolios/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name GetArtistById
     * @request GET:/api/artists/{id}
     * @secure
     */
    getArtistById: (id: number, params: RequestParams = {}) =>
      this.request<GetArtistByIdData, any>({
        path: `/api/artists/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name UpdateArtist
     * @request PUT:/api/artists/{id}
     * @secure
     */
    updateArtist: (id: number, data: Artist, params: RequestParams = {}) =>
      this.request<UpdateArtistData, any>({
        path: `/api/artists/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name DeleteArtist
     * @request DELETE:/api/artists/{id}
     * @secure
     */
    deleteArtist: (id: number, params: RequestParams = {}) =>
      this.request<DeleteArtistData, any>({
        path: `/api/artists/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name UpdatePortfolio1
     * @request PUT:/api/artists/{artistId}/portfolios/{portfolioId}
     * @secure
     */
    updatePortfolio1: (
      artistId: number,
      portfolioId: number,
      data: Portfolio,
      params: RequestParams = {}
    ) =>
      this.request<UpdatePortfolio1Data, any>({
        path: `/api/artists/${artistId}/portfolios/${portfolioId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name DeletePortfolio1
     * @request DELETE:/api/artists/{artistId}/portfolios/{portfolioId}
     * @secure
     */
    deletePortfolio1: (
      artistId: number,
      portfolioId: number,
      params: RequestParams = {}
    ) =>
      this.request<DeletePortfolio1Data, any>({
        path: `/api/artists/${artistId}/portfolios/${portfolioId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags portfolio-controller
     * @name GetAllPortfolios
     * @request GET:/api/portfolios
     * @secure
     */
    getAllPortfolios: (params: RequestParams = {}) =>
      this.request<GetAllPortfoliosData, any>({
        path: `/api/portfolios`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags portfolio-controller
     * @name CreatePortfolio
     * @request POST:/api/portfolios
     * @secure
     */
    createPortfolio: (data: Portfolio, params: RequestParams = {}) =>
      this.request<CreatePortfolioData, any>({
        path: `/api/portfolios`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name GetAllArtists
     * @request GET:/api/artists
     * @secure
     */
    getAllArtists: (params: RequestParams = {}) =>
      this.request<GetAllArtistsData, any>({
        path: `/api/artists`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name CreateArtist
     * @request POST:/api/artists
     * @secure
     */
    createArtist: (data: Artist, params: RequestParams = {}) =>
      this.request<CreateArtistData, any>({
        path: `/api/artists`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name GetPortfoliosByArtistId
     * @request GET:/api/artists/{artistId}/portfolios
     * @secure
     */
    getPortfoliosByArtistId: (artistId: number, params: RequestParams = {}) =>
      this.request<GetPortfoliosByArtistIdData, any>({
        path: `/api/artists/${artistId}/portfolios`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags artist-controller
     * @name AddPortfolioToArtist
     * @request POST:/api/artists/{artistId}/portfolios
     * @secure
     */
    addPortfolioToArtist: (
      artistId: number,
      data: Portfolio,
      params: RequestParams = {}
    ) =>
      this.request<AddPortfolioToArtistData, any>({
        path: `/api/artists/${artistId}/portfolios`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  }
}
