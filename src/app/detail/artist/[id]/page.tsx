// /* eslint-disable @typescript-eslint/no-explicit-any */

// 'use client'

// import * as React from 'react'
// import { Card, CardContent } from '@/components/shadcn/card'
// import Image from 'next/image'
// import CheckIcon from '@/assets/icons/check.svg'
// import { Button } from '@/components/shadcn/button'
// import { useGetArtistById } from '@/apis/artist.queries'
// import { CITIES, JOBFIELD_TYPES, PROJECT_TYPES } from '@/consts'

// type ArtistCardProps = {
//   name: string
//   job: string
//   score: number
//   imageSrc: string
// }

// function scoreBg(score: number) {
//   if (score >= 90) return 'bg-[#27C840]'
//   if (score >= 80) return 'bg-[#FEBC2F]'
//   return 'bg-[#FF5F57]'
// }

// const ArtistHeader = ({ name, job, score, imageSrc }: ArtistCardProps) => {
//   return (
//     <div className='flex flex-col items-center gap-2'>
//       <Card
//         tabIndex={0}
//         className='relative w-full aspect-[3.1/1] overflow-hidden rounded-2xl cursor-pointer'>
//         <div className='absolute inset-0 group overflow-hidden'>
//           {imageSrc ? (
//             <Image
//               src={imageSrc}
//               alt={name}
//               fill
//               className='object-cover transition-transform duration-300 group-hover:scale-105'
//               priority
//             />
//           ) : (
//             <div className='w-full h-full bg-gray-200' />
//           )}
//           <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
//         </div>

//         <div className='absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black via-black/75 to-transparent' />

//         <CardContent className='absolute bottom-3 left-3 right-3 z-10 p-0'>
//           <div className='flex flex-col pb-2 items-center justify-center text-white select-none'>
//             <h1>{name}</h1>
//             <p className='text-sm'>{job}</p>
//           </div>
//           <div
//             className={`absolute right-0 bottom-0 text-white font-bold px-2 py-1.5 rounded-sm text-xs ${scoreBg(
//               score
//             )} cursor-default`}>
//             {score}점
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// const TableTitle = ({ title }: { title: string }) => {
//   return (
//     <div className='flex items-center gap-1'>
//       <h2 className='text-lg font-extrabold'>{title}</h2>
//       <CheckIcon />
//     </div>
//   )
// }

// const TableContent = ({ info }: { info: string }) => {
//   return (
//     <span className='px-3 py-1.5 rounded-md border-1 border-gray-300 bg-white text-sm text-gray-600'>
//       {info}
//     </span>
//   )
// }

// function toViewModel(a: any) {
//   const name = a?.name ?? '이름 미상'
//   const job =
//     [
//       a?.jobField ? (JOBFIELD_TYPES as any)[a.jobField] || a.jobField : null,
//       a?.activityField
//         ? (PROJECT_TYPES as any)[a.activityField] || a.activityField
//         : null,
//     ]
//       .filter(Boolean)
//       .join(', ') || '전문분야 미상'
//   const score = 95
//   const imageSrc = a?.portfolios?.[0]?.files?.[0]?.fileUri || ''
//   const description = a?.introduction || '소개가 없습니다.'
//   const CITY_MAP: Record<string, string> = Object.fromEntries(
//     CITIES.map(c => [c.value, c.label] as const)
//   )
//   const region = a?.city ? (CITY_MAP[a.city] ?? a.city) : '지역 정보 없음'
//   const career =
//     typeof a?.career === 'number'
//       ? a.career <= 0
//         ? '1년 미만'
//         : `${a.career}년`
//       : '경력 정보 없음'
//   const portfolio = imageSrc
//   return { name, job, score, imageSrc, description, region, career, portfolio }
// }

// export default function Page({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = React.use(params)
//   const idNum = Number(id)
//   const q = useGetArtistById(idNum, undefined)

//   const [bannerOpen, setBannerOpen] = React.useState(false)
//   const hideTimer = React.useRef<number | null>(null)

//   const handlePropose = () => {
//     setBannerOpen(true)
//     if (hideTimer.current) window.clearTimeout(hideTimer.current)
//     hideTimer.current = window.setTimeout(() => setBannerOpen(false), 2500) // 2.5초
//   }

//   React.useEffect(() => {
//     return () => {
//       if (hideTimer.current) window.clearTimeout(hideTimer.current)
//     }
//   }, [])

//   if (q.isLoading)
//     return <div className='mx-auto max-w-4xl px-4 pt-10'>불러오는 중...</div>
//   if (q.error || !q.data?.data?.result)
//     return (
//       <div className='mx-auto max-w-4xl px-4 pt-10 text-red-800'>
//         데이터를 불러오지 못했습니다.
//       </div>
//     )

//   const artist = toViewModel(q.data.data.result)

//   return (
//     <div className='bg-blue-50 max-w-4xl mx-auto rounded-xl pb-4'>
//       <ArtistHeader
//         name={artist.name}
//         job={artist.job}
//         score={artist.score}
//         imageSrc={artist.imageSrc}
//       />

//       <div className='flex flex-col items-center py-5 gap-10'>
//         <div>
//           <h1>예술가 소개</h1>
//           <p>{artist.description}</p>
//         </div>

//         <div className='grid grid-cols-[130px_1fr] items-start justify-items-start gap-y-5 gap-x-6'>
//           <TableTitle title='전문분야' />
//           <TableContent info={artist.job} />

//           <TableTitle title='지역' />
//           <TableContent info={artist.region} />

//           <TableTitle title='경력' />
//           <TableContent info={artist.career} />

//           <div className='col-span-2'>
//             <div className='mb-2 flex items-center gap-1'>
//               <TableTitle title='포트폴리오' />
//             </div>

//             {artist.portfolio ? (
//               <div className='w-full rounded-xl overflow-hidden bg-white'>
//                 <div className='relative w-full aspect-[2/1]'>
//                   <Image
//                     src={artist.portfolio}
//                     alt='포트폴리오'
//                     width={320}
//                     height={156}
//                     className='object-cover'
//                   />
//                 </div>
//               </div>
//             ) : (
//               <div className='w-[320px] aspect-[2/1] rounded-xl overflow-hidden border bg-white' />
//             )}
//           </div>
//         </div>

//         {bannerOpen && (
//           <div
//             role='status'
//             aria-live='polite'
//             className='fixed bottom-10 w-100 max-w-md text-center rounded-lg bg-black/80 text-white px-4 py-3 shadow-lg'>
//             아티스트에게 제안 했습니다.
//           </div>
//         )}

//         <Button
//           onClick={handlePropose}
//           className='bg-[#006FFF] hover:bg-white text-white hover:text-[#006FFF] text-xl font-bold px-16 py-7 cursor-pointer'>
//           제안하기
//         </Button>
//       </div>
//     </div>
//   )
// }

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
  if (score >= 90)
    return 'bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25'
  if (score >= 80)
    return 'bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/25'
  return 'bg-gradient-to-r from-rose-500 to-rose-600 shadow-lg shadow-rose-500/25'
}

const ArtistHeader = ({ name, job, score, imageSrc }: ArtistCardProps) => {
  return (
    <div className='flex flex-col items-center gap-6 mb-8'>
      <Card
        tabIndex={0}
        className='relative w-full aspect-[3.1/1] overflow-hidden rounded-3xl cursor-pointer shadow-2xl shadow-black/20 hover:shadow-3xl hover:shadow-black/30 transition-all duration-500'>
        <div className='absolute inset-0 group overflow-hidden'>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-110'
              priority
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400' />
          )}
          <div className='absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30' />
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent' />

        <CardContent className='absolute bottom-6 left-6 right-6 z-10 p-0'>
          <div className='flex flex-col pb-4 items-center justify-center text-white select-none'>
            <h1 className='text-4xl font-bold mb-2 tracking-tight drop-shadow-lg'>
              {name}
            </h1>
            <p className='text-lg font-medium text-gray-200 tracking-wide'>
              {job}
            </p>
          </div>
          <div
            className={`absolute right-0 bottom-0 text-white font-bold px-4 py-2.5 rounded-xl text-sm ${scoreBg(
              score
            )} cursor-default backdrop-blur-sm border border-white/20`}>
            {score}점
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const TableTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-2'>
      <h2 className='text-xl font-bold text-gray-800 tracking-tight'>
        {title}
      </h2>
      <div className='p-1 bg-blue-100 rounded-full flex items-center justify-center'>
        <CheckIcon className='text-blue-600' />
      </div>
    </div>
  )
}

const TableContent = ({ info }: { info: string }) => {
  return (
    <span className='px-4 py-2.5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-sm text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-200'>
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
    return (
      <div className='mx-auto max-w-5xl px-6 pt-12'>
        <div className='flex flex-col items-center justify-center py-20 gap-10'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          <span className='ml-3 text-lg text-gray-600 font-medium'>
            아티스트 정보를 불러오는 중...
          </span>
        </div>
      </div>
    )
  if (q.error || !q.data?.data?.result)
    return (
      <div className='mx-auto max-w-5xl px-6 pt-12'>
        <div className='text-center py-20'>
          <div className='text-red-500 text-6xl mb-4'>⚠️</div>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            데이터를 불러올 수 없습니다
          </h2>
          <p className='text-gray-600'>잠시 후 다시 시도해주세요.</p>
        </div>
      </div>
    )

  const artist = toViewModel(q.data.data.result)

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
      <div className='max-w-5xl mx-auto px-6 py-8'>
        <ArtistHeader
          name={artist.name}
          job={artist.job}
          score={artist.score}
          imageSrc={artist.imageSrc}
        />

        <div className='space-y-12'>
          {/* 예술가 소개 섹션 */}
          <Card className='p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-black/5 rounded-3xl'>
            <div className='text-center mb-6'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4 tracking-tight'>
                예술가 소개
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full'></div>
            </div>
            <p className='text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto'>
              {artist.description}
            </p>
          </Card>

          {/* 상세 정보 섹션 */}
          <Card className='p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-black/5 rounded-3xl'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-4 tracking-tight'>
                상세 정보
              </h2>
              <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-[180px_1fr] items-start justify-items-start gap-y-8 gap-x-8'>
              <TableTitle title='전문분야' />
              <TableContent info={artist.job} />

              <TableTitle title='활동 지역' />
              <TableContent info={artist.region} />

              <TableTitle title='경력 사항' />
              <TableContent info={artist.career} />

              <div className='col-span-1 md:col-span-2 w-full'>
                <div className='mb-4 flex items-center gap-2'>
                  <TableTitle title='포트폴리오' />
                </div>

                {artist.portfolio ? (
                  <div className='w-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <div className='relative w-full aspect-[2/1] group'>
                      <Image
                        src={artist.portfolio}
                        alt='포트폴리오'
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
                    </div>
                  </div>
                ) : (
                  <div className='w-full aspect-[2/1] rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center'>
                    <div className='text-center text-gray-500'>
                      <div className='text-4xl mb-2'>🖼️</div>
                      <p className='font-medium'>
                        포트폴리오 이미지가 없습니다
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* 제안하기 버튼 */}
          <div className='text-center'>
            <Button
              onClick={handlePropose}
              className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl font-bold px-20 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1'>
              제안하기
            </Button>
          </div>
        </div>

        {/* 알림 배너 */}
        {bannerOpen && (
          <div
            role='status'
            aria-live='polite'
            className='fixed bottom-8 left-1/2 transform -translate-x-1/2 max-w-md text-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 shadow-2xl shadow-green-500/25 backdrop-blur-sm border border-white/20 animate-in slide-in-from-bottom-4 duration-300'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
              <span className='font-medium'>아티스트에게 제안했습니다!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
