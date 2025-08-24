import { ProjectDTO } from '@/apis/fetchers'
import { createStore } from 'zustand/vanilla'

export type ProjectMatchingResultState = {
  result: ProjectDTO[]
  condition: {
    city: string
    type: string
    budget: { minBudget: number; maxBudget: number }
  }
}

export type ProjectMatchingResultActions = {
  setResult: (props: ProjectDTO[]) => void
  setCondition: (
    city: string,
    type: string,
    budget: { minBudget: number; maxBudget: number }
  ) => void
}

export type ProjectMatchingResultStore = ProjectMatchingResultState &
  ProjectMatchingResultActions

export const initProjectMatchingResult = (): ProjectMatchingResultState => {
  return {
    result: [],
    condition: { city: '', type: '', budget: { minBudget: 0, maxBudget: 0 } },
  }
}

export const defaultInitState: ProjectMatchingResultState = {
  result: [],
  condition: { city: '', type: '', budget: { minBudget: 0, maxBudget: 0 } },
}

export const createProjectMatchingResultStore = (
  initState: ProjectMatchingResultState = defaultInitState
) => {
  return createStore<ProjectMatchingResultStore>()(set => ({
    ...initState,
    setResult: (value: ProjectDTO[]) =>
      set(state => ({ ...state, result: value })),
    setCondition: (
      city: string,
      type: string,
      budget: { minBudget: number; maxBudget: number }
    ) => set(state => ({ ...state, condition: { city, type, budget } })),
  }))
}
