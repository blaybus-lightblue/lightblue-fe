'use client'

import * as React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn/tabs'
import {
  FilterComboBox,
  FilterValue,
} from '@/components/explore/FilterComboBox'
import { SearchInput } from '@/components/explore/SearchInput'
import { ImageCard } from '@/components/explore/ImageCard'

type TabValue = 'all' | 'artist' | 'project'

type Item = {
  title: string
  subtitle: string
  imageSrc?: string
}
//@TODO api 연결 필요
const items: Item[] = [
  { title: '최하준', subtitle: '아티스트 / 일러스트', imageSrc: '' },
  { title: '김민서', subtitle: '아티스트 / 디자인', imageSrc: '' },
  { title: '강릉 카페 벽화 협업', subtitle: '프로젝트 / 외주', imageSrc: '' },
  { title: '제주 벽화 협업', subtitle: '프로젝트 / 외주', imageSrc: '' },
  { title: '이수정', subtitle: '아티스트 / 일러스트', imageSrc: '' },
  { title: '부산 골목 벽화', subtitle: '프로젝트 / 외주', imageSrc: '' },
]

const isArtist = (it: Item) =>
  it.subtitle.includes('아티스트') || it.subtitle.includes('일러스트')

const isProject = (it: Item) =>
  it.title.includes('협업') ||
  it.subtitle.includes('프로젝트') ||
  it.subtitle.includes('외주')

const filterFn: Record<FilterValue, (it: Item) => boolean> = {
  all: () => true,
  artist: isArtist,
  project: isProject,
}

const tabFn: Record<TabValue, (it: Item) => boolean> = {
  all: () => true,
  artist: isArtist,
  project: isProject,
}

export default function Page() {
  const [tab, setTab] = React.useState<TabValue>('all')
  const [filter, setFilter] = React.useState<FilterValue>('all')
  const [q, setQ] = React.useState('')

  const norm = (s: string) => s.toLowerCase().trim()

  const filtered = React.useMemo(() => {
    const nq = norm(q)
    return items.filter(it => {
      const hitText =
        !nq || norm(it.title).includes(nq) || norm(it.subtitle).includes(nq)
      return hitText && filterFn[filter](it) && tabFn[tab](it)
    })
  }, [q, filter, tab])

  return (
    <div className='mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 pb-16 pt-10'>
      <h1 className='text-5xl font-bold tracking-tight'>Artist & Project</h1>

      <Tabs
        value={tab}
        onValueChange={(v: string) => setTab(v as TabValue)}
        className='w-full'>
        <TabsList className='mx-auto grid w-[300px] grid-cols-3'>
          <TabsTrigger value='all'>전체</TabsTrigger>
          <TabsTrigger value='artist'>아티스트</TabsTrigger>
          <TabsTrigger value='project'>프로젝트</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className='flex w-full items-center gap-3'>
        <FilterComboBox
          value={filter}
          onChange={setFilter}
          className='shrink-0'
        />
        <SearchInput
          value={q}
          onChange={setQ}
          onEnter={val => {
            console.log('search confirm:', val)
          }}
        />
      </div>

      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {filtered.map((it, idx) => (
          <ImageCard
            key={`${it.title}-${idx}`}
            title={it.title}
            subtitle={it.subtitle}
            imageSrc={it.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}
