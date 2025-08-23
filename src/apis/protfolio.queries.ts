import { Portfolio, RequestParams } from './fetchers'
import { api } from './http'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const queryKeys = {
  all: ['portfolio'] as const,

  getAllPortfolios: (query?: RequestParams) =>
    [...queryKeys.all, query] as const,

  getPortfolioById: (id: number, query?: RequestParams) =>
    [...queryKeys.all, id, query] as const,

  getPortfoliosByArtistId: (artistId: number, query?: RequestParams) =>
    [...queryKeys.all, artistId, query] as const,
}

export const queryOptions = {
  getPortfolios: (params?: RequestParams) => ({
    queryKey: queryKeys.getAllPortfolios(params),
    queryFn: () => api.getAllPortfolios(params),
  }),

  getPortfolioById: (id: number, params?: RequestParams) => ({
    queryKey: queryKeys.getPortfolioById(id, params),
    queryFn: () => api.getPortfolioById(id, params),
  }),

  getProtfoliosByArtistId: (artistId: number, params?: RequestParams) => ({
    queryKeys: queryKeys.getPortfoliosByArtistId(artistId, params),
    queryFn: () => api.getPortfoliosByArtistId(artistId, params),
  }),

  updatePortfolio: (
    id: number,
    data: Portfolio,
    params: RequestParams = {}
  ) => ({
    mutationFn: () => api.updatePortfolio(id, data, params),
  }),
  deletePortfolio: (id: number, params: RequestParams = {}) => ({
    mutationFn: () => api.deletePortfolio(id, params),
  }),
  createPortfolio: (data: Portfolio, params: RequestParams = {}) => ({
    mutationFn: () => api.createPortfolio(data, params),
  }),
}

// 모든 포트폴리오 GET
export function useGetAllPortfolios(params?: RequestParams) {
  return useQuery(queryOptions.getPortfolios(params))
}

// 특정 포트폴리오 GET
export function useGetPortfolioById(id: number, params?: RequestParams) {
  return useQuery(queryOptions.getPortfolioById(id, params))
}

// 포트폴리오 수정
export function useUpdatePortfolio(
  id: number,
  data: Portfolio,
  params?: RequestParams
) {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.updatePortfolio(id, data, params))

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

// 포트폴리오 삭제
export function useDeletePortfolio(id: number, params?: RequestParams) {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.deletePortfolio(id, params))

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

// 포트폴리오 생성
export function useCreatePortfolio(data: Portfolio, params?: RequestParams) {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.createPortfolio(data, params))

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}
