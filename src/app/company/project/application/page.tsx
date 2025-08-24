/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import * as React from 'react'
import SortRight from '@/assets/icons/sort-right.svg'
import AI from '@/assets/icons/ai.svg'
import { ArtistCard } from '@/components/ArtistCard'
import { useGetAllArtists } from '@/apis/artist.queries'
import { JOBFIELD_TYPES, PROJECT_TYPES } from '@/consts'

type CardItem = {
  id: number
  name: string
  job: string
  score: number
  imageSrc: string
}

const firstPortfolioImage = (a: any) =>
  a?.portfolios?.[0]?.files?.[0]?.fileUri || ''

function stableScoreFromId(id: number | string) {
  const s = String(id)
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return 50 + (h % 51)
}

function jobTextOf(a: any) {
  const jf = a?.jobField
    ? (JOBFIELD_TYPES as any)[a.jobField] || a.jobField
    : null
  const act = a?.activityField
    ? (PROJECT_TYPES as any)[a.activityField] || a.activityField
    : null
  return [jf, act].filter(Boolean).join(', ') || '분야 미상'
}

function pickArray<T = unknown>(result: unknown): T[] {
  if (Array.isArray(result)) return result as T[]
  if (
    result &&
    typeof result === 'object' &&
    Array.isArray((result as any).content)
  ) {
    return (result as any).content as T[]
  }
  return []
}

function genresOf(a: any): string[] {
  const labels: string[] = []
  if (a?.jobField)
    labels.push((JOBFIELD_TYPES as any)[a.jobField] || a.jobField)
  if (a?.activityField)
    labels.push((PROJECT_TYPES as any)[a.activityField] || a.activityField)
  return labels
}

function topGenres(items: any[], n: number) {
  const freq = new Map<string, number>()
  for (const a of items) {
    for (const g of genresOf(a)) {
      const key = String(g).trim()
      if (!key) continue
      freq.set(key, (freq.get(key) ?? 0) + 1)
    }
  }
  return [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, n)
}

export default function Page() {
  const q = useGetAllArtists({}, undefined, { staleTime: 60_000 })

  if (q.isLoading) {
    return (
      <div className='bg-blue-50 px-3 py-6 max-w-2xl mx-auto rounded-xl'>
        불러오는 중...
      </div>
    )
  }
  if (q.error) {
    return (
      <div className='bg-blue-50 px-3 py-6 max-w-2xl mx-auto rounded-xl text-gray-700'>
        목록을 불러오지 못했습니다.
      </div>
    )
  }

  const rawArtists = pickArray<any>(q.data?.data?.result)

  const all: CardItem[] = rawArtists
    .map(a => {
      const rawId = a?.id ?? a?.accountId
      const id = Number(rawId)
      return {
        id,
        name: a?.name ?? '이름 미상',
        job: jobTextOf(a),
        score: stableScoreFromId(rawId ?? 'x'),
        imageSrc: firstPortfolioImage(a),
      }
    })
    .filter(x => Number.isFinite(x.id)) // id 없는 항목 방어

  const directApplicants = all.slice(0, 6)
  const aiRecommended = all
    .slice(6)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)

  const top2 = topGenres(rawArtists, 2)
  const stat1 = top2[0]
    ? `${top2[0][0]} ${top2[0][1]}명 수락가능`
    : '데이터 없음'
  const stat2 = top2[1]
    ? `${top2[1][0]} ${top2[1][1]}명 수락가능`
    : '데이터 없음'

  return (
    <div className='bg-blue-50 px-3 py-6 max-w-2xl mx-auto rounded-xl'>
      <div className='flex items-baseline gap-2 mb-6'>
        <h1 className='text-3xl font-bold'>지원현황</h1>
        <h2 className='text-2xl font-bold text-[#464A4D]'>{all.length}명</h2>
      </div>

      <div className='flex w-full items-center justify-around rounded-lg border-1 border-gray-300 py-2 mb-8 text-xl text-gray-500'>
        <p>{stat1}</p>
        <p>{stat2}</p>
      </div>

      <section className='mb-8'>
        <div className='flex items-center gap-1 mb-3'>
          <SortRight />
          <p className='text-lg font-bold'>직접지원자</p>
        </div>
        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {directApplicants.map(a => (
            <ArtistCard key={`direct-${a.id}`} {...a} />
          ))}
        </div>
      </section>

      <section>
        <div className='flex items-center gap-1 mb-3'>
          <AI />
          <p className='text-lg font-bold'>AI 추천</p>
        </div>
        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {aiRecommended.map(a => (
            <ArtistCard key={`ai-${a.id}`} {...a} />
          ))}
        </div>
      </section>
    </div>
  )
}
