import { AxiosResponse } from 'axios'
import {
  ApiResponsePageArtistDTO,
  ArtistCreateRequest,
  ArtistUpdateRequest,
  RequestParams,
  SearchArtistsParams,
} from './fetchers'
import { api } from './http'
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

const queryKeys = {
  all: ['artist'] as const,

  searchArtists: (
    query: Omit<SearchArtistsParams, 'pageable'>,
    params?: RequestParams
  ) => [...queryKeys.all, query, params] as const,

  getArtistById: (id: number, query?: RequestParams) =>
    [...queryKeys.all, id, query] as const,
}

export const queryOptions = {
  getAllArtists: (
    query: Omit<SearchArtistsParams, 'pageable'>,
    params?: RequestParams,
    options?: Omit<
      UseQueryOptions<AxiosResponse<ApiResponsePageArtistDTO>>,
      'queryKey' | 'queryFn'
    >
  ) => ({
    queryKey: queryKeys.searchArtists(query, params),
    queryFn: () =>
      api.searchArtists(
        { ...query, page: 0, size: 999 } as unknown as SearchArtistsParams,
        params
      ),
    ...options,
  }),

  getArtistById: (id: number, params?: RequestParams) => ({
    queryKey: queryKeys.getArtistById(id, params),
    queryFn: () => api.getArtistById(id, params),
  }),

  updateArtist: () => ({
    mutationFn: ({
      data,
    }: {
      data: { id: number; data: ArtistUpdateRequest; params?: RequestParams }
    }) => api.updateArtist(data.id, data.data, data.params),
  }),
  deleteArtist: () => ({
    mutationFn: ({ data }: { data: { id: number; params?: RequestParams } }) =>
      api.deleteArtist(data.id, data.params),
  }),
  createArtist: () => ({
    mutationFn: ({
      data,
    }: {
      data: { data: ArtistCreateRequest; params?: RequestParams }
    }) => api.createArtist(data.data, data.params),
  }),
}

export function useGetAllArtists(
  query: Omit<SearchArtistsParams, 'pageable'>,
  params?: RequestParams,
  options?: Omit<
    UseQueryOptions<AxiosResponse<ApiResponsePageArtistDTO>>,
    'queryKey' | 'queryFn'
  >
) {
  return useQuery(queryOptions.getAllArtists(query, params, options))
}

export function useGetArtistById(id: number, params?: RequestParams) {
  return useQuery(queryOptions.getArtistById(id, params))
}

export function useUpdateArtist() {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.updateArtist())

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

export function useDeleteArtist() {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.deleteArtist())

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

export function useCreateArtist() {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.createArtist())

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}
