'use client'

import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { MatchingResultCard } from '../matching/MatchingResultCard'
import { Flex } from '../flex'
import { Button } from '../shadcn/button'

import { useRouter } from 'next/navigation'
import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'
import { ArtistDTO, ProjectDTO } from '@/apis/fetchers'
import {
  useGetArtistMatchingScore,
  useGetProjectMatchingScore,
} from '@/hooks/useGetMatchingScore'
import { isEmpty } from 'lodash-es'

export type ArtistPageTemplateProps = ComponentProps<typeof Flex>

export const MatchingResultPageTemplate = ({
  children,
  ...rest
}: ArtistPageTemplateProps) => {
  return <Flex {...rest}>{children}</Flex>
}

const ArtistImageDisplayer = ({
  artists,
}: {
  artists: (ArtistDTO & {
    checked: boolean
    onCheckedChange: () => void
  })[]
}) => {
  const getScore = useGetArtistMatchingScore()
  return (
    <div
      className={cn(
        'border-1 border-emantic-divider-divider-2 bg-semantic-background-bg-2 rounded-[16px[] py-[81px] w-[1129px] px-[13px] rounded-[16px] '
      )}>
      <h1 className='headline-s text-center mb-[64px]'>매칭 결과 입니다.</h1>
      <Flex gap={30} wrap>
        {artists.map(artist => {
          return (
            <MatchingResultCard
              key={artist.id}
              image={artist.portfolios?.[0].url ?? '/1.jpg'}
              title={artist.name}
              description={artist.activityField}
              checked={artist.checked}
              onCheckedChange={artist.onCheckedChange}
              score={getScore(
                artist.activityArea!,
                artist.career!,
                !isEmpty(artist.portfolios)
              )}
            />
          )
        })}
      </Flex>
    </div>
  )
}

const ProjectImageDisplayer = ({ projects }: { projects: ProjectDTO[] }) => {
  const getScore = useGetProjectMatchingScore()
  return (
    <div
      className={cn(
        'border-1 border-emantic-divider-divider-2 bg-semantic-background-bg-2 rounded-[16px[] py-[81px] w-[1129px] px-[13px] rounded-[16px] '
      )}>
      <h1 className='headline-s text-center mb-[64px]'>매칭 결과 입니다.</h1>
      <Flex gap={30} wrap>
        {projects.map(project => {
          return (
            <MatchingResultCard
              key={project.id}
              image={project.referenceUrl ?? '/1.jpg'}
              title={project.title}
              description={project.description}
              score={getScore(
                project.activityCity!,
                project.projectType!,
                project.expectedBudget!
              )}
              hideCompare
            />
          )
        })}
      </Flex>
    </div>
  )
}

const ImageCompareSection = ({ artists }: { artists: ArtistDTO[] }) => {
  const router = useRouter()
  const { setCompareArtists } = useArtistStore(state => state)
  const getScore = useGetArtistMatchingScore()
  return (
    <div className='p-[20px] relative bg-semantic-background-bg-2 rounded-[16px] w-[384px] border-emantic-divider-divider-2 border h-fit min-h-[300px]'>
      <h2>지원자 비교하기</h2>
      <Flex gap={16} vertical className='mb-[80px]'>
        {artists.map(artist => {
          return (
            <MatchingResultCard
              key={artist.id}
              image={artist.portfolios?.[0].url ?? '/1.png'}
              description={artist.activityField}
              title={artist.name}
              score={getScore(
                artist.activityArea!,
                artist.career!,
                !isEmpty(artist.portfolios)
              )}
              hideCompare
            />
          )
        })}
      </Flex>
      <Button
        onClick={() => {
          setCompareArtists(artists)
          router.push('/matching/artist/result/compare')
        }}
        className='cursor-pointer w-[calc(100%-40px)] h-[50px] bg-white rounded-[40px] absolute bottom-[20px] text-black hover:bg-white'>
        <h3>비교하기</h3>
      </Button>
    </div>
  )
}

MatchingResultPageTemplate.ArtistImageDisplayer = ArtistImageDisplayer
MatchingResultPageTemplate.ProjectImageDisplayer = ProjectImageDisplayer
MatchingResultPageTemplate.ImageCompareSection = ImageCompareSection
