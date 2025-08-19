import {
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  RequestParams,
} from '../fetchers'
import { petApis } from '../http'

const queryKeys = {
  all: ['photos'] as const,

  findPetsByStatus: (query: FindPetsByStatusParams) =>
    [...queryKeys.all, query] as const,

  getPetById: (petId: number) => [...queryKeys.all, petId] as const,

  findPetsByTags: (query: FindPetsByTagsParams) =>
    [...queryKeys.all, query] as const,
}

const queryOptions = {
  findPetsByStatus: (
    query: FindPetsByStatusParams,
    params?: RequestParams
  ) => ({
    queryKey: queryKeys.findPetsByStatus(query),

    queryFn: () => petApis.findPetsByStatus(query, params),
  }),

  findPetsByTags: (query: FindPetsByTagsParams, params?: RequestParams) => ({
    queryKey: queryKeys.findPetsByTags(query),

    queryFn: () => petApis.findPetsByTags(query, params),
  }),

  getPetById: (petId: number, params?: RequestParams) => ({
    queryKey: queryKeys.getPetById(petId),

    queryFn: () => petApis.getPetById(petId, params),
  }),
}

export default queryOptions
