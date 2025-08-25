/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/shadcn/card'
import Image from 'next/image'
import CheckIcon from '@/assets/icons/check.svg'
import { Button } from '@/components/shadcn/button'
import { useGetArtistById } from '@/apis/artist.queries'
import { CITIES, JOBFIELD_TYPES, PROJECT_TYPES } from '@/consts'

type ArtistCardProps = {
  name: string
  job: string
  score: number
  imageSrc: string
}

function scoreBg(score: number) {
  if (score >= 90) return 'bg-[#27C840]'
  if (score >= 80) return 'bg-[#FEBC2F]'
  return 'bg-[#FF5F57]'
}

const ArtistHeader = ({ name, job, score, imageSrc }: ArtistCardProps) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Card
        tabIndex={0}
        className='relative w-full aspect-[3.1/1] overflow-hidden rounded-2xl cursor-pointer'>
        <div className='absolute inset-0 group overflow-hidden'>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
              priority
            />
          ) : (
            <div className='w-full h-full bg-gray-200' />
          )}
          <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black via-black/75 to-transparent' />

        <CardContent className='absolute bottom-3 left-3 right-3 z-10 p-0'>
          <div className='flex flex-col pb-2 items-center justify-center text-white select-none'>
            <h1>{name}</h1>
            <p className='text-sm'>{job}</p>
          </div>
          <div
            className={`absolute right-0 bottom-0 text-white font-bold px-2 py-1.5 rounded-sm text-xs ${scoreBg(
              score
            )} cursor-default`}>
            {score}점
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const TableTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-1'>
      <h2 className='text-lg font-extrabold'>{title}</h2>
      <CheckIcon />
    </div>
  )
}

const TableContent = ({ info }: { info: string }) => {
  return (
    <span className='px-3 py-1.5 rounded-md border-1 border-gray-300 bg-white text-sm text-gray-600'>
      {info}
    </span>
  )
}

function toViewModel(a: any) {
  const name = a?.name ?? '이름 미상'
  const job =
    [
      a?.jobField ? (JOBFIELD_TYPES as any)[a.jobField] || a.jobField : null,
      a?.activityField
        ? (PROJECT_TYPES as any)[a.activityField] || a.activityField
        : null,
    ]
      .filter(Boolean)
      .join(', ') || '전문분야 미상'
  const score = 95
  const imageSrc = a?.portfolios?.[0]?.files?.[0]?.fileUri || ''
  const description = a?.introduction || '소개가 없습니다.'
  const CITY_MAP: Record<string, string> = Object.fromEntries(
    CITIES.map(c => [c.value, c.label] as const)
  )
  const region = a?.city ? (CITY_MAP[a.city] ?? a.city) : '지역 정보 없음'
  const career =
    typeof a?.career === 'number'
      ? a.career <= 0
        ? '1년 미만'
        : `${a.career}년`
      : '경력 정보 없음'
  const portfolio = imageSrc
  return { name, job, score, imageSrc, description, region, career, portfolio }
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const idNum = Number(id)
  const q = useGetArtistById(idNum, undefined)

  const [bannerOpen, setBannerOpen] = React.useState(false)
  const hideTimer = React.useRef<number | null>(null)

  const handlePropose = () => {
    setBannerOpen(true)
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setBannerOpen(false), 2500) // 2.5초
  }

  React.useEffect(() => {
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
    }
  }, [])

  if (q.isLoading)
    return <div className='mx-auto max-w-4xl px-4 pt-10'>불러오는 중...</div>
  if (q.error || !q.data?.data?.result)
    return (
      <div className='mx-auto max-w-4xl px-4 pt-10 text-red-800'>
        데이터를 불러오지 못했습니다.
      </div>
    )

  const artist = toViewModel(q.data.data.result)

  return (
    <div className='bg-blue-50 max-w-4xl mx-auto rounded-xl pb-4'>
      <ArtistHeader
        name={artist.name}
        job={artist.job}
        score={artist.score}
        imageSrc={artist.imageSrc}
      />

      <div className='flex flex-col items-center py-5 gap-10'>
        <div>
          <h1>예술가 소개</h1>
          <p>{artist.description}</p>
        </div>

        <div className='grid grid-cols-[130px_1fr] items-start justify-items-start gap-y-5 gap-x-6'>
          <TableTitle title='전문분야' />
          <TableContent info={artist.job} />

          <TableTitle title='지역' />
          <TableContent info={artist.region} />

          <TableTitle title='경력' />
          <TableContent info={artist.career} />

          <div className='col-span-2'>
            <div className='mb-2 flex items-center gap-1'>
              <TableTitle title='포트폴리오' />
            </div>

            {artist.portfolio ? (
              <div className='w-full rounded-xl overflow-hidden bg-white'>
                <div className='relative w-full aspect-[2/1]'>
                  <Image
                    src={artist.portfolio}
                    alt='포트폴리오'
                    width={320}
                    height={156}
                    className='object-cover'
                  />
                </div>
              </div>
            ) : (
              <div className='w-[320px] aspect-[2/1] rounded-xl overflow-hidden border bg-white' />
            )}
          </div>
        </div>

        {bannerOpen && (
          <div
            role='status'
            aria-live='polite'
            className='fixed bottom-10 w-100 max-w-md text-center rounded-lg bg-black/80 text-white px-4 py-3 shadow-lg'>
            아티스트에게 제안 했습니다.
          </div>
        )}

        <Button
          onClick={handlePropose}
          className='bg-[#006FFF] hover:bg-white text-white hover:text-[#006FFF] text-xl font-bold px-16 py-7 cursor-pointer'>
          제안하기
        </Button>
      </div>
    </div>
  )
}
