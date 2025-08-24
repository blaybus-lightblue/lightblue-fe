import { CITIES, PROJECT_TYPES } from '@/consts'
import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'
import { useProjectStore } from '@/providers/ProjectMatchingResultProvider'

import { useCallback } from 'react'

export const useGetArtistMatchingScore = () => {
  const { condition } = useArtistStore(state => state)
  const getArtistMatchingScore = useCallback(
    (city: string, career: number, hasPotfolio: boolean) => {
      let score = 0
      if (CITIES.find(item => item.value === condition.city)?.label === city) {
        score++
      }
      if (career === condition.career) {
        score++
      }

      if (hasPotfolio === condition.hasPortfolio) {
        score++
      }

      return Math.round(score * 33.3)
    },
    [condition.career, condition.city, condition.hasPortfolio]
  )

  return getArtistMatchingScore
}

export const useGetProjectMatchingScore = () => {
  const { condition } = useProjectStore(state => state)
  const getProjectMatchingScore = useCallback(
    (city: string, type: string, budget: number) => {
      let score = 0
      if (CITIES.find(item => item.value === condition.city)?.label === city) {
        score++
      }
      if (
        PROJECT_TYPES.find(item => item.value === condition.type)?.label ===
        type
      ) {
        score++
      }

      if (
        budget >= condition.budget.minBudget &&
        budget <= condition.budget.maxBudget
      ) {
        score++
      }

      return Math.round(score * 33.3)
    },
    [condition.budget, condition.city, condition.type]
  )

  return getProjectMatchingScore
}
