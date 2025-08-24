'use client'

import * as React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn/tabs'
import { FilterComboBox } from '@/components/explore/FilterComboBox'
import { SearchInput } from '@/components/explore/SearchInput'
import { ImageCard } from '@/components/explore/ImageCard'
import { Button } from '@/components/shadcn/button'
import { CATEGORY_KEYWORDS, CategoryValue } from '@/consts'

type TabValue = 'all' | 'artist' | 'project'

type Item = {
  title: string
  subtitle: string
  kind: 'artist' | 'project'
  imageSrc?: string
}

// @NOTE: api 연결 예정
const items: Item[] = [
  { title: '최하준', subtitle: '일러스트', kind: 'artist', imageSrc: '' },
  { title: '김민서', subtitle: '디자인, 자수', kind: 'artist', imageSrc: '' },
  {
    title: '강릉 카페 벽화 협업',
    subtitle: '자수',
    kind: 'project',
    imageSrc: '',
  },
  { title: '제주 벽화 협업', subtitle: '외주', kind: 'project', imageSrc: '' },
  { title: '제주 벽화 협업', subtitle: '외주', kind: 'project', imageSrc: '' },
  { title: '제주 벽화 협업', subtitle: '외주', kind: 'project', imageSrc: '' },
  { title: '제주 벽화 협업', subtitle: '외주', kind: 'project', imageSrc: '' },
  { title: '이수정', subtitle: '연주', kind: 'artist', imageSrc: '' },
  { title: '이수정', subtitle: '연주', kind: 'artist', imageSrc: '' },
  { title: '이수정', subtitle: '연주', kind: 'artist', imageSrc: '' },
  { title: '이수정', subtitle: '연주', kind: 'artist', imageSrc: '' },
  { title: '부산 골목 벽화', subtitle: '외주', kind: 'project', imageSrc: '' },
]

const norm = (s: string) => s.toLowerCase().trim()
const includesAny = (text: string, keys: string[]) =>
  keys.some(k => text.includes(k.toLowerCase()))

export default function Page() {
  const [tab, setTab] = React.useState<TabValue>('all')
  const [category, setCategory] = React.useState<CategoryValue>('all')
  const [q, setQ] = React.useState('')
  const [showAll, setShowAll] = React.useState(false)

  React.useEffect(() => {
    setShowAll(false)
  }, [tab, category, q])

  const filtered = React.useMemo(() => {
    const nq = norm(q)
    const categoryKeys = CATEGORY_KEYWORDS[category]

    return items.filter(it => {
      const text = norm(`${it.title} ${it.subtitle}`)
      const hitText = !nq || text.includes(nq)

      const hitTab = tab === 'all' ? true : it.kind === tab

      const catText = norm(it.subtitle)
      const hitCategory =
        category === 'all' ? true : includesAny(catText, categoryKeys)

      return hitText && hitTab && hitCategory
    })
  }, [q, tab, category])

  const visible = showAll ? filtered : filtered.slice(0, 6)
  const canViewMore = filtered.length > 6 && !showAll

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
        <SearchInput
          value={q}
          onChange={setQ}
          onEnter={val => {
            console.log('search confirm:', val)
          }}
        />
      </div>

      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {visible.map((it, idx) => (
          <ImageCard
            key={`${it.title}-${idx}`}
            title={it.title}
            subtitle={it.subtitle}
            imageSrc={it.imageSrc}
          />
        ))}
      </div>

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
