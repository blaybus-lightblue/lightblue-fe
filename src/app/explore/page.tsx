/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import * as React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn/tabs'
import { FilterComboBox } from '@/components/explore/FilterComboBox'
import { SearchInput } from '@/components/explore/SearchInput'
import { ImageCard } from '@/components/explore/ImageCard'
import { Button } from '@/components/shadcn/button'
import { useGetAllArtists } from '@/apis/artist.queries'
import { useGetAllProjects } from '@/apis/project.queries'
import { CATEGORY_KEYWORDS, CategoryValue } from '@/consts'

type TabValue = 'all' | 'artist' | 'project'

type Item = {
  id: string
  title: string
  subtitle: string
  kind: 'artist' | 'project'
  imageSrc?: string
}

const JOBFIELD_LABEL: Record<string, string> = {
  MUSIC: '음악',
  DANCE: '무용',
  THEATER: '연극',
  VISUAL_ARTS: '시각예술',
  LITERATURE: '문학',
  FILM: '영화',
  PHOTOGRAPHY: '사진',
  DESIGN: '디자인',
  CRAFT: '공예',
  DIGITAL_ART: '디지털아트',
  FASHION: '패션',
  ARCHITECTURE: '건축',
  MULTIMEDIA: '멀티미디어',
  TRADITIONAL_ARTS: '전통예술',
  PERFORMANCE_ART: '퍼포먼스',
  OTHER: '기타',
}

const norm = (s: string) => s.toLowerCase().trim()
const includesAny = (text: string, keys: string[]) =>
  keys.some(k => text.includes(k.toLowerCase()))
const firstPortfolioThumb = (a: any) =>
  a?.portfolios?.[0]?.files?.[0]?.fileUri || ''

function pickArray<T = unknown>(result: unknown): T[] {
  if (Array.isArray(result)) return result as T[]
  const content = (result as any)?.content
  if (Array.isArray(content)) return content as T[]
  return []
}

export default function Page() {
  const [tab, setTab] = React.useState<TabValue>('all')
  const [category, setCategory] = React.useState<CategoryValue>('all')
  const [q, setQ] = React.useState('')
  const [showAll, setShowAll] = React.useState(false)

  const artistsQ = useGetAllArtists({}, undefined, { staleTime: 60_000 })
  const projectsQ = useGetAllProjects(
    { page: 0, size: 50, sort: 'createdAt', direction: 'desc' },
    undefined
  )

  const items = React.useMemo<Item[]>(() => {
    const artistItems =
      pickArray<any>(artistsQ.data?.data?.result).map(a => {
        const jf = a.jobField as string | undefined
        const subtitle = [jf ? (JOBFIELD_LABEL[jf] ?? jf) : '']
          .filter(Boolean)
          .join(' / ')
        return {
          id: String(a.id ?? a.artistId ?? crypto.randomUUID()),
          title: a.name ?? '이름 미상',
          subtitle,
          kind: 'artist' as const,
          imageSrc: firstPortfolioThumb(a),
        }
      }) ?? []

    const projectItems =
      pickArray<any>(projectsQ.data?.data?.result).map(p => ({
        id: String(p.id ?? p.projectId ?? crypto.randomUUID()),
        title: p.title ?? '제목 미상',
        subtitle: [p.primaryField, p.secondaryField, p.projectType]
          .filter(Boolean)
          .join(', '),
        kind: 'project' as const,
        imageSrc: p.thumbnailUrl || '',
      })) ?? []

    return [...artistItems, ...projectItems]
  }, [artistsQ.data, projectsQ.data])

  React.useEffect(() => {
    setShowAll(false)
  }, [tab, category, q])

  const filtered = React.useMemo(() => {
    const nq = norm(q)
    const categoryKeys = CATEGORY_KEYWORDS[category]
    return items.filter(it => {
      const hitText = !nq || norm(`${it.title} ${it.subtitle}`).includes(nq)
      const hitTab = tab === 'all' ? true : it.kind === tab
      const hitCategory =
        category === 'all' ? true : includesAny(norm(it.subtitle), categoryKeys)
      return hitText && hitTab && hitCategory
    })
  }, [items, q, tab, category])

  const visible = showAll ? filtered : filtered.slice(0, 6)
  const canViewMore = filtered.length > 6 && !showAll
  const loading = artistsQ.isLoading || projectsQ.isLoading
  const error = artistsQ.error || projectsQ.error

  if (loading)
    return <div className='mx-auto max-w-5xl px-4 pt-10'>불러오는 중...</div>
  if (error)
    return (
      <div className='mx-auto max-w-5xl px-4 pt-10 text-red-800'>
        데이터를 불러오지 못했습니다.
      </div>
    )

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
          value={category}
          onChange={setCategory}
          className='shrink-0'
        />
        <SearchInput value={q} onChange={setQ} onEnter={() => {}} />
      </div>

      {filtered.length === 0 ? (
        <p className='text-gray-500'>검색 조건에 맞는 결과가 없어요.</p>
      ) : (
        <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map(it => (
            <ImageCard
              key={`${it.kind}-${it.id}`}
              id={it.id}
              kind={it.kind}
              title={it.title}
              subtitle={it.subtitle}
              imageSrc={it.imageSrc}
            />
          ))}
        </div>
      )}

      {canViewMore && (
        <Button
          className='border bg-white text-black hover:bg-semantic-cta-cta hover:text-semantic-cta-cta-tertiary-hover cursor-pointer'
          onClick={() => setShowAll(true)}>
          view more
        </Button>
      )}
    </div>
  )
}
