import { cn } from '@/lib/utils'
import { Component, ComponentProps } from 'react'
import { MatchingResultCard } from '../matching/MatchingResultCard'
import { Flex } from '../flex'
import Image from 'next/image'

export type ArtistPageTemplateProps = ComponentProps<'div'>

export const MatchingResultPageTemplate = ({
  children,
  className,
  ...rest
}: ArtistPageTemplateProps) => {
  return (
    <div
      className={cn(
        'bg-semantic-background-bg-2 rounded-[16px[] pt-[81px] w-[1129px]',
        className
      )}
      {...rest}>
      <h1 className='headline-s'>매칭 결과 입니다.</h1>
      {children}
    </div>
  )
}

const ImageWrapper = ({
  data,
}: {
  data: ComponentProps<typeof MatchingResultCard>[]
}) => {
  return (
    <Flex gap={36}>
      {data.map(prop => {
        return <MatchingResultCard key={prop.image} {...prop} />
      })}
    </Flex>
  )
}

MatchingResultPageTemplate.ImageWrapper = ImageWrapper
