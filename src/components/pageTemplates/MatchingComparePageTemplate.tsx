'use client'

import { cn } from '@/lib/utils'
import { ComponentProps, CSSProperties } from 'react'
import { MatchingResultCard } from '../matching/MatchingResultCard'

import { ArtistDTO } from '@/apis/fetchers'
import { Flex } from '../flex'
import Image from 'next/image'

export type MatchingComparePageTemplateProps = ComponentProps<'div'>

export const MatchingComparePageTemplate = ({
  children,
}: MatchingComparePageTemplateProps) => {
  return (
    <div
      className={cn(
        'border-1 border-emantic-divider-divider-2 bg-semantic-background-bg-2 rounded-[16px[] py-[81px] w-[1129px] px-[13px] rounded-[16px] '
      )}>
      <h1 className='headline-s text-center mb-[64px]'>
        비교하기 결과 입니다.
      </h1>
      {children}
    </div>
  )
}

const AristItemValue = ({ value }: { value?: string }) => {
  return (
    <div className='label-m text-[#555555] rounded-[8px] border-emantic-divider-divider-2 bg-white border py-[5px] px-[25px]'>
      {value}
    </div>
  )
}

const ArtistItem = ({
  artist,
  className,
  style,
}: {
  artist: ArtistDTO
  className?: string
  style?: CSSProperties
}) => {
  return (
    <Flex vertical align='center' className={className} style={style} gap={20}>
      <MatchingResultCard
        hideCompare
        image={artist.portfolios?.[0].url ?? '/1.jpg'}
        title={artist.name}
        description={artist.activityField}
      />
      <div>
        <h1 className='text-center'>예술가소개</h1>
        <p className='text-center'>{artist.introduction}</p>
      </div>
      <Flex vertical gap={8} className='w-full'>
        <Flex>
          <h2 className='w-[50%]'>전문분야</h2>
          <AristItemValue value={artist.activityField} />
        </Flex>
        <Flex>
          <h2 className='w-[50%]'>지역</h2>
          <AristItemValue value={artist.activityArea} />
        </Flex>
        <Flex>
          <h2 className='w-[50%]'>경력</h2>
          <AristItemValue value={`${artist.career}년`} />
        </Flex>
        <div>
          <h2 className='w-[50%]'>포트폴리오</h2>
          <Image
            src={artist.portfolios?.[0].url ?? '/1.jpg'}
            width={305}
            height={156}
            alt=''
          />
        </div>
      </Flex>
    </Flex>
  )
}

MatchingComparePageTemplate.ArtistItem = ArtistItem
