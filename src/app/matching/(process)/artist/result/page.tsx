'use client'
import { MatchingResultPageTemplate } from '@/components/pageTemplates/MatchingResultPageTemplate'
import { useGetArtistMatchingScore } from '@/hooks/useGetMatchingScore'

import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'
import { isNil } from 'lodash-es'
import { useState } from 'react'

export default function Page() {
  const { result } = useArtistStore(state => state)
  const [compareList, setCompareList] = useState<number[]>([])
  const getScore = useGetArtistMatchingScore()

  return (
    <MatchingResultPageTemplate>
      <MatchingResultPageTemplate.ArtistImageDisplayer
        artists={result.map(item => {
          const res = {
            ...item,
            checked: compareList.includes(item.id ?? -1),
            onCheckedChange: () => {
              if (isNil(item.id)) {
                return
              }

              if (compareList.includes(item.id)) {
                setCompareList(prev => prev.filter(_item => _item !== item.id))
                return
              }

              if (compareList.length >= 3) {
                alert('최대 3개까지 비교가능합니다.')
                return
              }
              setCompareList(prev => [...prev, item.id ?? -1])
            },
          }

          return res
        })}
      />
      <MatchingResultPageTemplate.ImageCompareSection
        artists={result.filter(item => {
          return compareList.includes(item.id ?? -1)
        })}
      />
    </MatchingResultPageTemplate>
  )
}
