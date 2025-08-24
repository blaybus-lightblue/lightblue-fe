import { GetAllPortfoliosParams, RequestParams } from './fetchers'
import { api } from './http'
import { useQuery } from '@tanstack/react-query'

const queryKeys = {
  all: ['portfolio'] as const,

  getAllPortfolios: (query: GetAllPortfoliosParams, params?: RequestParams) =>
    [...queryKeys.all, query, params] as const,

  getPortfolioById: (id: number, query?: RequestParams) =>
    [...queryKeys.all, id, query] as const,

  getPortfoliosByArtistId: (artistId: number, query?: RequestParams) =>
    [...queryKeys.all, artistId, query] as const,
}

export const queryOptions = {
  getPortfolios: (query: GetAllPortfoliosParams, params?: RequestParams) => ({
    queryKey: queryKeys.getAllPortfolios(query, params),
    queryFn: () => api.getAllPortfolios(query, params),
  }),
}

// 모든 포트폴리오 GET
export function useGetAllPortfolios(
  query: GetAllPortfoliosParams,
  params?: RequestParams
) {
  return useQuery(queryOptions.getPortfolios(query, params))
}
