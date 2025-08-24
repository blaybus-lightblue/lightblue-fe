import { ArtistDTO } from '@/apis/fetchers'
import { createStore } from 'zustand/vanilla'

export type ArtistMatchingResultState = {
  result: ArtistDTO[]
  compareArtists: ArtistDTO[]
}

export type ArtistMatchingResultActions = {
  setResult: (props: ArtistDTO[]) => void
  setCompareArtists: (props: ArtistDTO[]) => void
}

export type ArtistMatchingResultStore = ArtistMatchingResultState &
  ArtistMatchingResultActions

export const initArtistMatchingResult = (): ArtistMatchingResultState => {
  return { result: [], compareArtists: [] }
}

export const defaultInitState: ArtistMatchingResultState = {
  result: [],
  compareArtists: [],
}

export const createArtistMatchingResultStore = (
  initState: ArtistMatchingResultState = defaultInitState
) => {
  return createStore<ArtistMatchingResultStore>()(set => ({
    ...initState,
    setResult: (value: ArtistDTO[]) =>
      set(state => ({ ...state, result: value })),
    setCompareArtists: (value: ArtistDTO[]) =>
      set(state => ({ ...state, compareArtists: value })),
  }))
}
