import { Artist, RequestParams } from './fetchers'
import { api } from './http'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const queryKeys = {
  all: ['artist'] as const,

  getAllArtists: (query?: RequestParams) => [...queryKeys.all, query] as const,

  getArtistById: (id: number, query?: RequestParams) =>
    [...queryKeys.all, id, query] as const,
}

export const queryOptions = {
  getAllArtists: (params?: RequestParams) => ({
    queryKey: queryKeys.getAllArtists(params),
    queryFn: () => api.getAllArtists(params),
  }),

  getArtistById: (id: number, params?: RequestParams) => ({
    queryKey: queryKeys.getArtistById(id, params),
    queryFn: () => api.getArtistById(id, params),
  }),

  updateArtist: (id: number, data: Artist, params: RequestParams = {}) => ({
    mutationFn: () => api.updateArtist(id, data, params),
  }),
  deleteArtist: (id: number, params: RequestParams = {}) => ({
    mutationFn: () => api.deleteArtist(id, params),
  }),
  createArtist: (data: Artist, params: RequestParams = {}) => ({
    mutationFn: () => api.createArtist(data, params),
  }),
}

export function useGetAllArtists(params?: RequestParams) {
  return useQuery(queryOptions.getAllArtists(params))
}

export function useGetArtistById(id: number, params?: RequestParams) {
  return useQuery(queryOptions.getArtistById(id, params))
}

export function useUpdateArtist(
  id: number,
  data: Artist,
  params?: RequestParams
) {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.updateArtist(id, data, params))

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

export function useDeleteArtist(id: number, params?: RequestParams) {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.deleteArtist(id, params))

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

export function useCreateArtist(data: Artist, params?: RequestParams) {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.createArtist(data, params))

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}
