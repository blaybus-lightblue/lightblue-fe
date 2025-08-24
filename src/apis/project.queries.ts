import {
  GetAllProjectsParams,
  GetProjectsByBudgetRangeParams,
  GetProjectsByCityParams,
  GetProjectsByTypeParams,
  ProjectCreateRequest,
  ProjectDTO,
  ProjectUpdateRequest,
  RequestParams,
  SearchProjectsParams,
} from './fetchers'
import { api } from './http'
import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'

const queryKeys = {
  all: ['project'] as const,

  getAllProjects: (query?: GetAllProjectsParams, params?: RequestParams) =>
    [...queryKeys.all, query, params] as const,

  getProjectById: (id: number, params?: RequestParams) =>
    [...queryKeys.all, id, params] as const,
  searchProjects: (query: SearchProjectsParams, params: RequestParams = {}) => [
    ...queryKeys.all,
    query,
    params,
  ],
  matchProject: (
    city: GetProjectsByCityParams,
    type: GetProjectsByTypeParams,
    budget: GetProjectsByBudgetRangeParams,
    params: RequestParams = {}
  ) => [...queryKeys.all, city, type, budget, params],
}

export const queryOptions = {
  getAllProjects: (query: GetAllProjectsParams, params?: RequestParams) => ({
    queryKey: queryKeys.getAllProjects(query, params),
    queryFn: () => api.getAllProjects(query, params),
  }),

  getProjectById: (id: number, params?: RequestParams) => ({
    queryKey: queryKeys.getProjectById(id, params),
    queryFn: () => api.getProject(id, params),
  }),
  searchProjectByKeyword: (
    query: SearchProjectsParams,
    params: RequestParams = {}
  ) => ({
    queryKey: queryKeys.searchProjects(query, params),
    queryFn: () => api.searchProjects(query, params),
  }),

  matchProject: (
    city: GetProjectsByCityParams['city'],
    type: GetProjectsByTypeParams['projectType'],
    budget: GetProjectsByBudgetRangeParams,
    options?: Omit<
      UseQueryOptions<{ result: (ProjectDTO & { score: number })[] }>,
      'queryKey' | 'queryFn'
    >
  ) => ({
    queryKey: queryKeys.matchProject({ city }, { projectType: type }, budget),
    queryFn: async () => {
      const res = await Promise.all([
        api.getProjectsByCity({ city }),
        api.getProjectsByBudgetRange(budget),
        api.getProjectsByType({ projectType: type }),
      ])

      const scores = new Array(
        [
          ...(res[0].data.result ?? []),
          ...(res[1].data.result ?? []),
          ...(res[2].data.result ?? []),
        ].length
      )
        .fill(Math.random() * 100)
        .sort((a, b) => a - b)

      return {
        result: [
          res[0].data.result,
          res[1].data.result,
          res[2].data.result,
        ].map((item, index) => ({
          ...item,
          score: scores[index],
        })),
      }
    },
    ...options,
  }),

  updateProject: () => ({
    mutationFn: ({
      data,
    }: {
      data: { id: number; data: ProjectUpdateRequest; params?: RequestParams }
    }) => api.updateProject(data.id, data.data, data.params),
  }),
  deleteProject: () => ({
    mutationFn: ({ data }: { data: { id: number; params?: RequestParams } }) =>
      api.deleteProject(data.id, data.params),
  }),
  createProject: () => ({
    mutationFn: ({
      data,
    }: {
      data: { data: ProjectCreateRequest; params?: RequestParams }
    }) => api.createProject(data.data, data.params),
  }),
}

export function useGetAllProjects(
  query: GetAllProjectsParams,
  params?: RequestParams
) {
  return useQuery(queryOptions.getAllProjects(query, params))
}

export function useGetProjectById(id: number, params?: RequestParams) {
  return useQuery(queryOptions.getProjectById(id, params))
}

export function useSearchProject(
  query: SearchProjectsParams,
  params: RequestParams = {}
) {
  return useQuery(queryOptions.searchProjectByKeyword(query, params))
}

export function useMatchProject(
  city: GetProjectsByCityParams['city'],
  type: GetProjectsByTypeParams['projectType'],
  budget: GetProjectsByBudgetRangeParams,
  options?: Omit<
    UseQueryOptions<{ result: (ProjectDTO & { score: number })[] }>,
    'queryKey'
  >
) {
  return useQuery(queryOptions.matchProject(city, type, budget, options))
}

export function useUpdateProject() {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.updateProject())

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

export function useDeleteProject() {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.deleteProject())

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}

export function useCreateProject() {
  const queryClient = useQueryClient()
  const res = useMutation(queryOptions.createProject())

  if (res.isSuccess) {
    queryClient.invalidateQueries({ queryKey: queryKeys.all })
  }

  return res
}
