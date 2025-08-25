'use client'

import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { MatchingResultCard } from '../matching/MatchingResultCard'
import { Flex } from '../flex'
import { Button } from '../shadcn/button'

import { useRouter } from 'next/navigation'
import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'
import { ArtistDTO, ProjectDTO } from '@/apis/fetchers'

export type ArtistPageTemplateProps = ComponentProps<typeof Flex>

export const MatchingResultPageTemplate = ({
  children,
  ...rest
}: ArtistPageTemplateProps) => {
  return (
    <Flex
      {...rest}
      className={cn(
        'min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8',
        rest.className
      )}>
      <div className='max-w-[1920px] mx-auto px-6 min-w-[1200px]'>
        {children}
      </div>
    </Flex>
  )
}

const ArtistImageDisplayer = ({
  artists,
}: {
  artists: (ArtistDTO & {
    checked: boolean
    onCheckedChange: () => void
  })[]
}) => {
  return (
    <div className='w-full'>
      {/* 헤더 섹션 개선 */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-3'>매칭 결과</h1>
        <p className='text-gray-600 text-lg'>
          총{' '}
          <span className='font-semibold text-blue-600'>
            {artists.length}명
          </span>
          의 아티스트가 매칭되었습니다
        </p>
        <div className='w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full'></div>
      </div>

      {/* 메인 결과 카드 컨테이너 */}
      <div
        className={cn(
          'bg-white rounded-3xl shadow-lg border border-gray-200',
          'p-8  mb-8',
          'backdrop-blur-sm bg-white/95'
        )}>
        {/* 그리드 레이아웃으로 카드 배치 개선 */}
        <div className='flex flex-wrap gap-4'>
          {artists.map((artist, index) => {
            return (
              <div
                key={artist.id}
                className='group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
                style={{
                  animationDelay: `${index * 100}ms`,
                }}>
                <MatchingResultCard
                  image={artist.portfolios?.[0].url ?? '/1.jpg'}
                  title={artist.name}
                  description={artist.activityField}
                  checked={artist.checked}
                  onCheckedChange={artist.onCheckedChange}
                />
              </div>
            )
          })}
        </div>

        {/* 결과가 없을 때의 상태 */}
        {artists.length === 0 && (
          <div className='text-center py-20'>
            <div className='text-gray-400 mb-4'>
              <svg
                className='w-16 h-16 mx-auto'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014.846 17H9.154a3.374 3.374 0 00-2.548-1.453l-.548-.547z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-medium text-gray-500 mb-2'>
              매칭 결과가 없습니다
            </h3>
            <p className='text-gray-400'>다른 조건으로 다시 검색해보세요</p>
          </div>
        )}
      </div>
    </div>
  )
}

const ProjectImageDisplayer = ({ projects }: { projects: ProjectDTO[] }) => {
  return (
    <div className='w-full max-w-[1920px] mx-auto px-6 min-w-[1200px]'>
      {/* 헤더 섹션 개선 */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-900 mb-3'>
          프로젝트 매칭 결과
        </h1>
        <p className='text-gray-600 text-lg'>
          총{' '}
          <span className='font-semibold text-green-600'>
            {projects.length}개
          </span>
          의 프로젝트가 매칭되었습니다
        </p>
        <div className='w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full'></div>
      </div>

      {/* 메인 결과 카드 컨테이너 */}
      <div
        className={cn(
          'bg-white rounded-3xl shadow-lg border border-gray-200',
          'p-8 lg:p-12 mb-8',
          'backdrop-blur-sm bg-white/95'
        )}>
        {/* 그리드 레이아웃으로 카드 배치 개선 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className='group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl'
                style={{
                  animationDelay: `${index * 100}ms`,
                }}>
                <MatchingResultCard
                  image={project.referenceUrl ?? '/1.jpg'}
                  title={project.title}
                  description={project.description}
                  hideCompare
                />
              </div>
            )
          })}
        </div>

        {/* 결과가 없을 때의 상태 */}
        {projects.length === 0 && (
          <div className='text-center py-20'>
            <div className='text-gray-400 mb-4'>
              <svg
                className='w-16 h-16 mx-auto'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                />
              </svg>
            </div>
            <h3 className='text-xl font-medium text-gray-500 mb-2'>
              매칭된 프로젝트가 없습니다
            </h3>
            <p className='text-gray-400'>다른 조건으로 다시 검색해보세요</p>
          </div>
        )}
      </div>
    </div>
  )
}

const ImageCompareSection = ({ artists }: { artists: ArtistDTO[] }) => {
  const router = useRouter()
  const { setCompareArtists } = useArtistStore(state => state)

  return (
    <div className='sticky top-8'>
      <div
        className={cn(
          'bg-white rounded-3xl shadow-lg border border-gray-200',
          'p-6 backdrop-blur-sm bg-white/95',
          'min-h-[400px] w-full ',
          'transition-all duration-300 hover:shadow-xl'
        )}>
        {/* 헤더 개선 */}
        <div className='mb-6 pb-4 border-b border-gray-100'>
          <h2 className='text-xl font-bold text-gray-900 flex items-center gap-2'>
            <svg
              className='w-5 h-5 text-blue-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
              />
            </svg>
            지원자 비교하기
          </h2>
          <p className='text-sm text-gray-500 mt-1'>
            선택된 {artists.length}명을 상세 비교해보세요
          </p>
        </div>

        {/* 선택된 아티스트 목록 */}
        <div className='space-y-3 mb-8 max-h-[300px] overflow-y-auto flex flex-wrap gap-4'>
          {artists.length === 0 ? (
            <div className='text-center py-8'>
              <div className='text-gray-300 mb-3'>
                <svg
                  className='w-12 h-12 mx-auto'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
                  />
                </svg>
              </div>
              <p className='text-sm text-gray-400'>
                비교할 아티스트를 선택해주세요
              </p>
            </div>
          ) : (
            artists.map((artist, index) => (
              <div
                key={artist.id}
                className='transform transition-all duration-200'
                style={{
                  animationDelay: `${index * 50}ms`,
                }}>
                <MatchingResultCard
                  image={artist.portfolios?.[0].url ?? '/1.png'}
                  description={artist.activityField}
                  title={artist.name}
                  hideCompare
                />
              </div>
            ))
          )}
        </div>

        {/* 비교하기 버튼 개선 */}
        <Button
          onClick={() => {
            setCompareArtists(artists)
            router.push('/matching/artist/result/compare')
          }}
          disabled={artists.length === 0}
          className={cn(
            'w-full h-12 rounded-2xl font-semibold text-base',
            'transition-all duration-300 transform',
            artists.length > 0
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed',
            'relative overflow-hidden'
          )}>
          {artists.length > 0 && (
            <div className='absolute inset-0 bg-white/20 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left' />
          )}
          <span className='relative flex items-center justify-center gap-2'>
            {artists.length > 0
              ? `${artists.length}명 비교하기`
              : '아티스트를 선택해주세요'}
          </span>
        </Button>
      </div>
    </div>
  )
}

MatchingResultPageTemplate.ArtistImageDisplayer = ArtistImageDisplayer
MatchingResultPageTemplate.ProjectImageDisplayer = ProjectImageDisplayer
MatchingResultPageTemplate.ImageCompareSection = ImageCompareSection
