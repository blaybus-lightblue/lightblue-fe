import { ArtistDTO } from '@/apis/fetchers'
import { createStore } from 'zustand/vanilla'

export type ArtistMatchingResultState = {
  result: ArtistDTO[]
}

export type ArtistMatchingResultActions = {
  setResult: (props: ArtistDTO[]) => void
}

export type ArtistMatchingResultStore = ArtistMatchingResultState &
  ArtistMatchingResultActions

export const initArtistMatchingResult = (): ArtistMatchingResultState => {
  return { result: [] }
}

export const defaultInitState: ArtistMatchingResultState = {
  result: [],
}

export const createArtistMatchingResultStore = (
  initState: ArtistMatchingResultState = defaultInitState
) => {
  return createStore<ArtistMatchingResultStore>()(set => ({
    ...initState,
    setResult: () => set(state => ({ result: state.result })),
  }))
}
