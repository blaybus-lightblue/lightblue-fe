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

export interface ProjectUpdateRequest {
  /**
   * @minLength 0
   * @maxLength 100
   */
  title?: string
  projectType?:
    | 'PERFORMANCE'
    | 'EXHIBITION'
    | 'FESTIVAL'
    | 'WORKSHOP'
    | 'COLLABORATION'
    | 'COMMERCIAL'
    | 'EDUCATIONAL'
    | 'COMMUNITY'
    | 'DIGITAL'
    | 'INSTALLATION'
    | 'OTHER'
  /**
   * @minLength 0
   * @maxLength 500
   */
  requirements?: string
  primaryArtField?:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
  secondaryArtField?:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
  /**
   * @format int32
   * @min 1
   * @max 100
   */
  recruitmentCount?: number
  /** @format date */
  startDate?: string
  activityCity?:
    | 'SEOUL'
    | 'BUSAN'
    | 'DAEGU'
    | 'INCHEON'
    | 'GWANGJU'
    | 'DAEJEON'
    | 'ULSAN'
    | 'SEJONG'
    | 'GYEONGGI'
    | 'GANGWON'
    | 'CHUNGBUK'
    | 'CHUNGNAM'
    | 'JEONBUK'
    | 'JEONNAM'
    | 'GYEONGBUK'
    | 'GYEONGNAM'
    | 'JEJU'
    | 'ONLINE'
    | 'OTHER'
  /**
   * @format int64
   * @min 0
   */
  expectedBudget?: number
  /**
   * @minLength 100
   * @maxLength 1000
   */
  description?: string
  /**
   * @minLength 0
   * @maxLength 500
   */
  referenceUrl?: string
  status?: 'RECRUITING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'PAUSED'
}

export interface ApiResponseProjectDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: ProjectDTO
}

export interface ProjectDTO {
  /** @format int64 */
  id?: number
  /** @format int64 */
  creatorId?: number
  creatorName?: string
  title?: string
  projectType?:
    | 'PERFORMANCE'
    | 'EXHIBITION'
    | 'FESTIVAL'
    | 'WORKSHOP'
    | 'COLLABORATION'
    | 'COMMERCIAL'
    | 'EDUCATIONAL'
    | 'COMMUNITY'
    | 'DIGITAL'
    | 'INSTALLATION'
    | 'OTHER'
  requirements?: string
  primaryArtField?:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
  secondaryArtField?:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
  /** @format int32 */
  recruitmentCount?: number
  /** @format date */
  startDate?: string
  activityCity?:
    | 'SEOUL'
    | 'BUSAN'
    | 'DAEGU'
    | 'INCHEON'
    | 'GWANGJU'
    | 'DAEJEON'
    | 'ULSAN'
    | 'SEJONG'
    | 'GYEONGGI'
    | 'GANGWON'
    | 'CHUNGBUK'
    | 'CHUNGNAM'
    | 'JEONBUK'
    | 'JEONNAM'
    | 'GYEONGBUK'
    | 'GYEONGNAM'
    | 'JEJU'
    | 'ONLINE'
    | 'OTHER'
  /** @format int64 */
  expectedBudget?: number
  description?: string
  referenceUrl?: string
  status?: 'RECRUITING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'PAUSED'
  /** @format date-time */
  createdAt?: string
  /** @format date-time */
  updatedAt?: string
}

export interface Account {
  /** @format int64 */
  id?: number
  username?: string
  accountType?: string
  enabled?: boolean
  authorities?: GrantedAuthority[]
  accountNonExpired?: boolean
  accountNonLocked?: boolean
  credentialsNonExpired?: boolean
}

export interface Artist {
  /** @format int64 */
  id?: number
  account?: Account
  name?: string
  phone?: string
  email?: string
  /** @format int32 */
  career?: number
  jobField?: string
  activityArea?: string
  activityField?: string
  desiredCollaborationField?: string
  introduction?: string
  portfolios?: Portfolio[]
}

export interface GrantedAuthority {
  authority?: string
}

export interface Portfolio {
  /** @format int64 */
  id?: number
  artist?: Artist
  url?: string
  files?: PortfolioFile[]
}

export interface PortfolioFile {
  /** @format int64 */
  id?: number
  portfolio?: Portfolio
  fileUri?: string
}

export interface PortfolioRequest {
  url?: string
}

export interface ProjectCreateRequest {
  /**
   * @minLength 0
   * @maxLength 100
   */
  title: string
  projectType:
    | 'PERFORMANCE'
    | 'EXHIBITION'
    | 'FESTIVAL'
    | 'WORKSHOP'
    | 'COLLABORATION'
    | 'COMMERCIAL'
    | 'EDUCATIONAL'
    | 'COMMUNITY'
    | 'DIGITAL'
    | 'INSTALLATION'
    | 'OTHER'
  /**
   * @minLength 0
   * @maxLength 500
   */
  requirements: string
  primaryArtField:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
  secondaryArtField?:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
  /**
   * @format int32
   * @min 1
   * @max 100
   */
  recruitmentCount: number
  /** @format date */
  startDate: string
  activityCity:
    | 'SEOUL'
    | 'BUSAN'
    | 'DAEGU'
    | 'INCHEON'
    | 'GWANGJU'
    | 'DAEJEON'
    | 'ULSAN'
    | 'SEJONG'
    | 'GYEONGGI'
    | 'GANGWON'
    | 'CHUNGBUK'
    | 'CHUNGNAM'
    | 'JEONBUK'
    | 'JEONNAM'
    | 'GYEONGBUK'
    | 'GYEONGNAM'
    | 'JEJU'
    | 'ONLINE'
    | 'OTHER'
  /**
   * @format int64
   * @min 0
   */
  expectedBudget: number
  /**
   * @minLength 100
   * @maxLength 1000
   */
  description: string
  /**
   * @minLength 0
   * @maxLength 500
   */
  referenceUrl?: string
}

export interface RegisterRequest {
  username?: string
  password?: string
  accountType?: string
}

export interface AuthResponse {
  token?: string
}

export interface LoginRequest {
  username?: string
  password?: string
}

export interface ApiResponseListProjectDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: ProjectDTO[]
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

export interface ApiResponseVoid {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: object
}

export type GetProjectData = ApiResponseProjectDTO

export type UpdateProjectData = ApiResponseProjectDTO

export type DeleteProjectData = ApiResponseVoid

export type GetPortfolioByIdData = Portfolio

export type UpdatePortfolioData = Portfolio

export type DeletePortfolioData = any

export type GetArtistByIdData = ArtistDTO

export type UpdateArtistData = Artist

export type DeleteArtistData = any

export type UpdatePortfolio1Data = Portfolio

export type DeletePortfolio1Data = any

export interface GetAllProjectsParams {
  /**
   * @format int32
   * @default 0
   */
  page?: number
  /**
   * @format int32
   * @default 10
   */
  size?: number
  /** @default "createdAt" */
  sort?: string
  /** @default "desc" */
  direction?: string
}

export type GetAllProjectsData = ApiResponseListProjectDTO

export type CreateProjectData = ApiResponseProjectDTO

export type GetAllPortfoliosData = Portfolio[]

export type CreatePortfolioData = Portfolio

export type RegisterData = AuthResponse

export type LoginData = AuthResponse

export type GetAllArtistsData = Artist[]

export type CreateArtistData = Artist

export type GetPortfoliosByArtistIdData = PortfolioDTO[]

export type AddPortfolioToArtistData = Portfolio

export interface SearchProjectsParams {
  keyword: string
}

export type SearchProjectsData = ApiResponseListProjectDTO

export type GetMyProjectsData = ApiResponseListProjectDTO

export interface GetProjectsByTypeParams {
  projectType:
    | 'PERFORMANCE'
    | 'EXHIBITION'
    | 'FESTIVAL'
    | 'WORKSHOP'
    | 'COLLABORATION'
    | 'COMMERCIAL'
    | 'EDUCATIONAL'
    | 'COMMUNITY'
    | 'DIGITAL'
    | 'INSTALLATION'
    | 'OTHER'
}

export type GetProjectsByTypeData = ApiResponseListProjectDTO

export interface GetProjectsByStatusParams {
  status: 'RECRUITING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'PAUSED'
}

export type GetProjectsByStatusData = ApiResponseListProjectDTO

export interface GetProjectsByStartDateAfterParams {
  /** @format date */
  date: string
}

export type GetProjectsByStartDateAfterData = ApiResponseListProjectDTO

export interface GetProjectsByCityParams {
  city:
    | 'SEOUL'
    | 'BUSAN'
    | 'DAEGU'
    | 'INCHEON'
    | 'GWANGJU'
    | 'DAEJEON'
    | 'ULSAN'
    | 'SEJONG'
    | 'GYEONGGI'
    | 'GANGWON'
    | 'CHUNGBUK'
    | 'CHUNGNAM'
    | 'JEONBUK'
    | 'JEONNAM'
    | 'GYEONGBUK'
    | 'GYEONGNAM'
    | 'JEJU'
    | 'ONLINE'
    | 'OTHER'
}

export type GetProjectsByCityData = ApiResponseListProjectDTO

export interface GetProjectsByBudgetRangeParams {
  /** @format int64 */
  minBudget: number
  /** @format int64 */
  maxBudget: number
}

export type GetProjectsByBudgetRangeData = ApiResponseListProjectDTO

export interface GetProjectsByArtFieldParams {
  artField:
    | 'MUSIC'
    | 'DANCE'
    | 'THEATER'
    | 'VISUAL_ARTS'
    | 'LITERATURE'
    | 'FILM'
    | 'PHOTOGRAPHY'
    | 'DESIGN'
    | 'CRAFT'
    | 'DIGITAL_ART'
    | 'FASHION'
    | 'ARCHITECTURE'
    | 'MULTIMEDIA'
    | 'TRADITIONAL_ARTS'
    | 'PERFORMANCE_ART'
    | 'OTHER'
}

export type GetProjectsByArtFieldData = ApiResponseListProjectDTO

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
     * @description 특정 프로젝트의 상세 정보를 조회합니다.
     *
     * @tags Project
     * @name GetProject
     * @summary 프로젝트 상세 조회
     * @request GET:/api/projects/{id}
     * @secure
     */
    getProject: (id: number, params: RequestParams = {}) =>
      this.request<GetProjectData, any>({
        path: `/api/projects/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 기존 프로젝트 정보를 수정합니다.
     *
     * @tags Project
     * @name UpdateProject
     * @summary 프로젝트 수정
     * @request PUT:/api/projects/{id}
     * @secure
     */
    updateProject: (
      id: number,
      data: ProjectUpdateRequest,
      params: RequestParams = {}
    ) =>
      this.request<UpdateProjectData, any>({
        path: `/api/projects/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 프로젝트를 삭제합니다.
     *
     * @tags Project
     * @name DeleteProject
     * @summary 프로젝트 삭제
     * @request DELETE:/api/projects/{id}
     * @secure
     */
    deleteProject: (id: number, params: RequestParams = {}) =>
      this.request<DeleteProjectData, any>({
        path: `/api/projects/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

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
      data: {
        portfolioRequest: PortfolioRequest
        files?: File[]
      },
      params: RequestParams = {}
    ) =>
      this.request<UpdatePortfolio1Data, any>({
        path: `/api/artists/${artistId}/portfolios/${portfolioId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
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
     * @description 프로젝트 목록을 조회합니다.
     *
     * @tags Project
     * @name GetAllProjects
     * @summary 프로젝트 목록 조회
     * @request GET:/api/projects
     * @secure
     */
    getAllProjects: (query: GetAllProjectsParams, params: RequestParams = {}) =>
      this.request<GetAllProjectsData, any>({
        path: `/api/projects`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 새로운 프로젝트를 생성합니다.
     *
     * @tags Project
     * @name CreateProject
     * @summary 프로젝트 생성
     * @request POST:/api/projects
     * @secure
     */
    createProject: (data: ProjectCreateRequest, params: RequestParams = {}) =>
      this.request<CreateProjectData, any>({
        path: `/api/projects`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
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
     * @tags auth-controller
     * @name Register
     * @request POST:/api/auth/register
     * @secure
     */
    register: (data: RegisterRequest, params: RequestParams = {}) =>
      this.request<RegisterData, any>({
        path: `/api/auth/register`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth-controller
     * @name Login
     * @request POST:/api/auth/login
     * @secure
     */
    login: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<LoginData, any>({
        path: `/api/auth/login`,
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
      data: {
        portfolioRequest: PortfolioRequest
        files?: File[]
      },
      params: RequestParams = {}
    ) =>
      this.request<AddPortfolioToArtistData, any>({
        path: `/api/artists/${artistId}/portfolios`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 키워드로 프로젝트를 검색합니다.
     *
     * @tags Project
     * @name SearchProjects
     * @summary 프로젝트 검색
     * @request GET:/api/projects/search
     * @secure
     */
    searchProjects: (query: SearchProjectsParams, params: RequestParams = {}) =>
      this.request<SearchProjectsData, any>({
        path: `/api/projects/search`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 현재 사용자가 생성한 프로젝트를 조회합니다.
     *
     * @tags Project
     * @name GetMyProjects
     * @summary 내가 생성한 프로젝트 조회
     * @request GET:/api/projects/my
     * @secure
     */
    getMyProjects: (params: RequestParams = {}) =>
      this.request<GetMyProjectsData, any>({
        path: `/api/projects/my`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 프로젝트 유형별로 조회합니다.
     *
     * @tags Project
     * @name GetProjectsByType
     * @summary 유형별 프로젝트 조회
     * @request GET:/api/projects/filter/type
     * @secure
     */
    getProjectsByType: (
      query: GetProjectsByTypeParams,
      params: RequestParams = {}
    ) =>
      this.request<GetProjectsByTypeData, any>({
        path: `/api/projects/filter/type`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 프로젝트 상태별로 조회합니다.
     *
     * @tags Project
     * @name GetProjectsByStatus
     * @summary 상태별 프로젝트 조회
     * @request GET:/api/projects/filter/status
     * @secure
     */
    getProjectsByStatus: (
      query: GetProjectsByStatusParams,
      params: RequestParams = {}
    ) =>
      this.request<GetProjectsByStatusData, any>({
        path: `/api/projects/filter/status`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 특정 날짜 이후 시작하는 프로젝트를 조회합니다.
     *
     * @tags Project
     * @name GetProjectsByStartDateAfter
     * @summary 시작일 이후 프로젝트 조회
     * @request GET:/api/projects/filter/start-date
     * @secure
     */
    getProjectsByStartDateAfter: (
      query: GetProjectsByStartDateAfterParams,
      params: RequestParams = {}
    ) =>
      this.request<GetProjectsByStartDateAfterData, any>({
        path: `/api/projects/filter/start-date`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 활동지역별로 프로젝트를 조회합니다.
     *
     * @tags Project
     * @name GetProjectsByCity
     * @summary 지역별 프로젝트 조회
     * @request GET:/api/projects/filter/city
     * @secure
     */
    getProjectsByCity: (
      query: GetProjectsByCityParams,
      params: RequestParams = {}
    ) =>
      this.request<GetProjectsByCityData, any>({
        path: `/api/projects/filter/city`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 예산 범위별로 프로젝트를 조회합니다.
     *
     * @tags Project
     * @name GetProjectsByBudgetRange
     * @summary 예산범위별 프로젝트 조회
     * @request GET:/api/projects/filter/budget
     * @secure
     */
    getProjectsByBudgetRange: (
      query: GetProjectsByBudgetRangeParams,
      params: RequestParams = {}
    ) =>
      this.request<GetProjectsByBudgetRangeData, any>({
        path: `/api/projects/filter/budget`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 예술분야별로 프로젝트를 조회합니다.
     *
     * @tags Project
     * @name GetProjectsByArtField
     * @summary 예술분야별 프로젝트 조회
     * @request GET:/api/projects/filter/art-field
     * @secure
     */
    getProjectsByArtField: (
      query: GetProjectsByArtFieldParams,
      params: RequestParams = {}
    ) =>
      this.request<GetProjectsByArtFieldData, any>({
        path: `/api/projects/filter/art-field`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  }
}
