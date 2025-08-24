import { ArtistDTO } from '@/apis/fetchers'
import { createStore } from 'zustand/vanilla'

export type ArtistMatchingResultState = {
  result: ArtistDTO[]
  condition: {
    city: string
    career: number
    hasPortfolio: boolean
  }
  compareArtists: ArtistDTO[]
}

export type ArtistMatchingResultActions = {
  setResult: (props: ArtistDTO[]) => void
  setCompareArtists: (props: ArtistDTO[]) => void
  setCondition: (city: string, career: number, hasPortfolio: boolean) => void
}

export type ArtistMatchingResultStore = ArtistMatchingResultState &
  ArtistMatchingResultActions

export const initArtistMatchingResult = (): ArtistMatchingResultState => {
  return {
    result: [],
    compareArtists: [],
    condition: {
      city: '',
      career: 0,
      hasPortfolio: false,
    },
  }
}

export const defaultInitState: ArtistMatchingResultState = {
  result: [],
  compareArtists: [],
  condition: {
    city: '',
    career: 0,
    hasPortfolio: false,
  },
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
    setCondition: (city: string, career: number, hasPortfolio: boolean) =>
      set(state => ({ ...state, condition: { city, career, hasPortfolio } })),
  }))
}
