'use client'

import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { MatchingResultCard } from '../matching/MatchingResultCard'
import { Flex } from '../flex'
import { Button } from '../shadcn/button'
import Link from 'next/link'

export type ArtistPageTemplateProps = ComponentProps<typeof Flex>

export const MatchingResultPageTemplate = ({
  children,
  ...rest
}: ArtistPageTemplateProps) => {
  return <Flex {...rest}>{children}</Flex>
}

const ImageDisplayer = ({
  data,
}: {
  data: ComponentProps<typeof MatchingResultCard>[]
}) => {
  console.log(data)
  return (
    <div
      className={cn(
        'border-1 border-emantic-divider-divider-2 bg-semantic-background-bg-2 rounded-[16px[] py-[81px] w-[1129px] px-[13px] rounded-[16px] '
      )}>
      <h1 className='headline-s text-center mb-[64px]'>매칭 결과 입니다.</h1>
      <Flex gap={30} wrap>
        {data.map((prop, index) => {
          return <MatchingResultCard key={index} {...prop} />
        })}
      </Flex>
    </div>
  )
}

const ImageCompareSection = ({
  data,
}: {
  data: Omit<ComponentProps<typeof MatchingResultCard>, 'checked' | ''>[]
}) => {
  return (
    <div className='p-[20px] relative bg-semantic-background-bg-2 rounded-[16px] w-[384px] border-emantic-divider-divider-2 border h-fit min-h-[300px]'>
      <h2>지원자 비교하기</h2>
      <Flex gap={16} vertical className='mb-[80px]'>
        {data.map((prop, index) => {
          return <MatchingResultCard key={index} {...prop} hideCompare />
        })}
      </Flex>
      <Button
        asChild
        className='w-[calc(100%-40px)] h-[50px] bg-white rounded-[40px] absolute bottom-[20px]'>
        <Link href={'/matching/artist/result/compare'}>
          <h3>비교하기</h3>
        </Link>
      </Button>
    </div>
  )
}

MatchingResultPageTemplate.ImageDisplayer = ImageDisplayer
MatchingResultPageTemplate.ImageCompareSection = ImageCompareSection
