'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
  type ProjectMatchingResultStore,
  createProjectMatchingResultStore,
  initProjectMatchingResult,
} from '@/stores/project-matching-result-store'

export type ProjecterStoreApi = ReturnType<
  typeof createProjectMatchingResultStore
>

export const ProjectStoreContext = createContext<ProjecterStoreApi | undefined>(
  undefined
)

export interface ProjecterStoreProviderProps {
  children: ReactNode
}

export const ProjectMatchingResultProvider = ({
  children,
}: ProjecterStoreProviderProps) => {
  const storeRef = useRef<ProjecterStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createProjectMatchingResultStore(
      initProjectMatchingResult()
    )
  }

  return (
    <ProjectStoreContext.Provider value={storeRef.current}>
      {children}
    </ProjectStoreContext.Provider>
  )
}

export const useProjectStore = <T,>(
  selector: (store: ProjectMatchingResultStore) => T
): T => {
  const projectStoreContext = useContext(ProjectStoreContext)

  if (!projectStoreContext) {
    throw new Error(
      `useProjecterStore must be used within ProjecterStoreProvider`
    )
  }

  return useStore(projectStoreContext, selector)
}
