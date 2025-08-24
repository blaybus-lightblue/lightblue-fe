'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
  type ArtistMatchingResultStore,
  createArtistMatchingResultStore,
  initArtistMatchingResult,
} from '@/stores/artist-matching-result-store'

export type ArtistStoreApi = ReturnType<typeof createArtistMatchingResultStore>

export const ArtistStoreContext = createContext<ArtistStoreApi | undefined>(
  undefined
)

export interface ArtistStoreProviderProps {
  children: ReactNode
}

export const ArtistMatchingResultProvider = ({
  children,
}: ArtistStoreProviderProps) => {
  const storeRef = useRef<ArtistStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createArtistMatchingResultStore(
      initArtistMatchingResult()
    )
  }

  return (
    <ArtistStoreContext.Provider value={storeRef.current}>
      {children}
    </ArtistStoreContext.Provider>
  )
}

export const useArtistStore = <T,>(
  selector: (store: ArtistMatchingResultStore) => T
): T => {
  const artistStoreContext = useContext(ArtistStoreContext)

  if (!artistStoreContext) {
    throw new Error(`useArtistStore must be used within ArtistStoreProvider`)
  }

  return useStore(artistStoreContext, selector)
}
