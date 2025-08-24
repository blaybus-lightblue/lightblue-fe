import {
  ArtistCreateRequest,
  ArtistDTO,
  ArtistUpdateRequest,
  RequestParams,
  SearchArtistsParams,
} from './fetchers'
import { api } from './http'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const queryKeys = {
  all: ['artist'] as const,

  searchArtists: (query?: SearchArtistsParams, params?: RequestParams) =>
    [...queryKeys.all, query, params] as const,

  getArtistById: (id: number, query?: RequestParams) =>
    [...queryKeys.all, id, query] as const,
}

export const queryOptions = {
  getAllArtists: (query: SearchArtistsParams, params?: RequestParams) => ({
    queryKey: queryKeys.searchArtists(query, params),
    queryFn: () => api.searchArtists(query, params),
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
  query: SearchArtistsParams,
  params?: RequestParams
) {
  return useQuery(queryOptions.getAllArtists(query, params))
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
