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

export interface ArtistUpdateRequest {
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
}

export interface ApiResponseArtistDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: ArtistDTO
}

export interface ArtistDTO {
  /** @format int64 */
  id?: number
  /** @format int64 */
  accountId?: number
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
  portfolios?: PortfolioDTO[]
}

export interface PortfolioDTO {
  /** @format int64 */
  id?: number
  /** @format int64 */
  artistId?: number
  url?: string
  files?: PortfolioFileDTO[]
}

export interface PortfolioFileDTO {
  /** @format int64 */
  id?: number
  fileUri?: string
}

export interface PortfolioRequest {
  url?: string
}

export interface ApiResponsePortfolioDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: PortfolioDTO
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

export interface ArtistCreateRequest {
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
  /** @format int64 */
  accountId?: number
}

export interface ApiResponseListProjectDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: ProjectDTO[]
}

export interface Pageable {
  /**
   * @format int32
   * @min 0
   */
  page?: number
  /**
   * @format int32
   * @min 1
   */
  size?: number
  sort?: string[]
}

export interface ApiResponsePagePortfolioDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: PagePortfolioDTO
}

export interface PagePortfolioDTO {
  /** @format int64 */
  totalElements?: number
  /** @format int32 */
  totalPages?: number
  pageable?: PageableObject
  first?: boolean
  /** @format int32 */
  size?: number
  content?: PortfolioDTO[]
  /** @format int32 */
  number?: number
  sort?: SortObject[]
  /** @format int32 */
  numberOfElements?: number
  last?: boolean
  empty?: boolean
}

export interface PageableObject {
  paged?: boolean
  /** @format int32 */
  pageNumber?: number
  /** @format int32 */
  pageSize?: number
  /** @format int64 */
  offset?: number
  sort?: SortObject[]
  unpaged?: boolean
}

export interface SortObject {
  direction?: string
  nullHandling?: string
  ascending?: boolean
  property?: string
  ignoreCase?: boolean
}

export interface ApiResponsePageArtistDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: PageArtistDTO
}

export interface PageArtistDTO {
  /** @format int64 */
  totalElements?: number
  /** @format int32 */
  totalPages?: number
  pageable?: PageableObject
  first?: boolean
  /** @format int32 */
  size?: number
  content?: ArtistDTO[]
  /** @format int32 */
  number?: number
  sort?: SortObject[]
  /** @format int32 */
  numberOfElements?: number
  last?: boolean
  empty?: boolean
}

export interface ApiResponseListPortfolioDTO {
  isSuccess?: boolean
  code?: string
  message?: string
  result?: PortfolioDTO[]
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

export type GetArtistByIdData = ApiResponseArtistDTO

export type UpdateArtistData = ApiResponseArtistDTO

export type DeleteArtistData = ApiResponseVoid

export type UpdatePortfolioData = ApiResponsePortfolioDTO

export type DeletePortfolioData = ApiResponseVoid

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

export type RegisterData = AuthResponse

export type LoginData = AuthResponse

export interface SearchArtistsParams {
  activityArea?: string
  /** @format int32 */
  career?: number
  hasPortfolios?: boolean
  pageable: Pageable
}

export type SearchArtistsData = ApiResponsePageArtistDTO

export type CreateArtistData = ApiResponseArtistDTO

export type GetPortfoliosByArtistIdData = ApiResponseListPortfolioDTO

export type AddPortfolioToArtistData = ApiResponsePortfolioDTO

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

export interface GetAllPortfoliosParams {
  pageable: Pageable
}

export type GetAllPortfoliosData = ApiResponsePagePortfolioDTO

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
     * @description 특정 ID를 가진 아티스트의 상세 정보를 조회합니다.
     *
     * @tags Artist
     * @name GetArtistById
     * @summary 아티스트 상세 조회
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
     * @description 기존 아티스트 정보를 수정합니다.
     *
     * @tags Artist
     * @name UpdateArtist
     * @summary 아티스트 정보 수정
     * @request PUT:/api/artists/{id}
     * @secure
     */
    updateArtist: (
      id: number,
      data: ArtistUpdateRequest,
      params: RequestParams = {}
    ) =>
      this.request<UpdateArtistData, any>({
        path: `/api/artists/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 아티스트를 삭제합니다.
     *
     * @tags Artist
     * @name DeleteArtist
     * @summary 아티스트 삭제
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
     * @description 특정 아티스트의 포트폴리오를 수정합니다.
     *
     * @tags Artist
     * @name UpdatePortfolio
     * @summary 아티스트 포트폴리오 수정
     * @request PUT:/api/artists/{artistId}/portfolios/{portfolioId}
     * @secure
     */
    updatePortfolio: (
      artistId: number,
      portfolioId: number,
      data: {
        portfolioRequest: PortfolioRequest
        files?: File[]
      },
      params: RequestParams = {}
    ) =>
      this.request<UpdatePortfolioData, any>({
        path: `/api/artists/${artistId}/portfolios/${portfolioId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 특정 아티스트의 포트폴리오를 삭제합니다.
     *
     * @tags Artist
     * @name DeletePortfolio
     * @summary 아티스트 포트폴리오 삭제
     * @request DELETE:/api/artists/{artistId}/portfolios/{portfolioId}
     * @secure
     */
    deletePortfolio: (
      artistId: number,
      portfolioId: number,
      params: RequestParams = {}
    ) =>
      this.request<DeletePortfolioData, any>({
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
     * @description 새로운 사용자를 등록합니다.
     *
     * @tags Auth
     * @name Register
     * @summary 회원가입
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
     * @description 기존 사용자로 로그인합니다.
     *
     * @tags Auth
     * @name Login
     * @summary 로그인
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
     * @description 활동 분야, 경력, 포트폴리오 유무로 아티스트를 검색합니다.
     *
     * @tags Artist
     * @name SearchArtists
     * @summary 아티스트 검색
     * @request GET:/api/artists
     * @secure
     */
    searchArtists: (query: SearchArtistsParams, params: RequestParams = {}) =>
      this.request<SearchArtistsData, any>({
        path: `/api/artists`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 새로운 아티스트를 등록합니다.
     *
     * @tags Artist
     * @name CreateArtist
     * @summary 아티스트 생성
     * @request POST:/api/artists
     * @secure
     */
    createArtist: (data: ArtistCreateRequest, params: RequestParams = {}) =>
      this.request<CreateArtistData, any>({
        path: `/api/artists`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 아티스트의 모든 포트폴리오를 조회합니다.
     *
     * @tags Artist
     * @name GetPortfoliosByArtistId
     * @summary 아티스트의 포트폴리오 조회
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
     * @description 특정 아티스트에게 새로운 포트폴리오를 추가합니다.
     *
     * @tags Artist
     * @name AddPortfolioToArtist
     * @summary 아티스트에게 포트폴리오 추가
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

    /**
     * @description 모든 포트폴리오를 페이지 기반으로 조회합니다.
     *
     * @tags Portfolio
     * @name GetAllPortfolios
     * @summary 모든 포트폴리오 조회 (페이지네이션)
     * @request GET:/api/portfolios
     * @secure
     */
    getAllPortfolios: (
      query: GetAllPortfoliosParams,
      params: RequestParams = {}
    ) =>
      this.request<GetAllPortfoliosData, any>({
        path: `/api/portfolios`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),
  }
}
