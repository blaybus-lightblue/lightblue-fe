'use client'
import { MatchingResultPageTemplate } from '@/components/pageTemplates/MatchingResultPageTemplate'

import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'
import { isNil } from 'lodash-es'
import { useState } from 'react'

export default function Page() {
  const { result } = useArtistStore(state => state)
  const [compareList, setCompareList] = useState<number[]>([])
  return (
    <MatchingResultPageTemplate>
      <MatchingResultPageTemplate.ImageWrapper
        data={result.map(item => {
          return {
            image: item.portfolios?.[0].url ?? '',
            title: item.name ?? '',
            description: item.jobField ?? '',
            checked: compareList.includes(item.id ?? -1),
            onCheckedChange: () => {
              if (isNil(item.id)) {
                return
              }

              if (compareList.includes(item.id)) {
                setCompareList(prev => prev.filter(_item => _item !== item.id))
                return
              }

              setCompareList(prev => [...prev, item.id ?? -1])
            },
          }
        })}
      />
    </MatchingResultPageTemplate>
  )
}
