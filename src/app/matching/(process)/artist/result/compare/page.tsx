'use client'
import { Flex } from '@/components/flex'
import { MatchingComparePageTemplate } from '@/components/pageTemplates/MatchingComparePageTemplate'

import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'

export default function Page() {
  const { compareArtists } = useArtistStore(state => state)

  return (
    <MatchingComparePageTemplate>
      <Flex gap={30} justify='center'>
        {compareArtists.map(item => {
          return (
            <MatchingComparePageTemplate.ArtistItem
              className='w-[350px]'
              key={item.id}
              artist={item}
            />
          )
        })}
      </Flex>
    </MatchingComparePageTemplate>
  )
}
