import { ProjectDTO } from '@/apis/fetchers'
import { createStore } from 'zustand/vanilla'

export type ProjectMatchingResultState = {
  result: ProjectDTO[]
}

export type ProjectMatchingResultActions = {
  setResult: (props: ProjectDTO[]) => void
}

export type ProjectMatchingResultStore = ProjectMatchingResultState &
  ProjectMatchingResultActions

export const initProjectMatchingResult = (): ProjectMatchingResultState => {
  return { result: [] }
}

export const defaultInitState: ProjectMatchingResultState = {
  result: [],
}

export const createProjectMatchingResultStore = (
  initState: ProjectMatchingResultState = defaultInitState
) => {
  return createStore<ProjectMatchingResultStore>()(set => ({
    ...initState,
    setResult: (value: ProjectDTO[]) =>
      set(state => ({ ...state, result: value })),
  }))
}
