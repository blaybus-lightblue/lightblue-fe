'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader } from '@/components/shadcn/card'
import Image from 'next/image'
import { Checkbox } from '@/components/shadcn/checkbox'
import Link from 'next/link'

type ArtistCardProps = {
  id: number
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

export const ArtistCard = ({
  id,
  name,
  job,
  score,
  imageSrc,
}: ArtistCardProps) => {
  const href = `/detail/artist/${id}`

  return (
    <div className='flex flex-col items-center gap-2'>
      <Link href={href} prefetch={false} className='block w-full'>
        <Card
          role='link'
          tabIndex={0}
          className='relative w-75 aspect-[346/244] overflow-hidden rounded-2xl cursor-pointer'>
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

          <div className='absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black from-20% via-black/75 via-40% to-transparent to-100%' />

          <CardHeader
            className='absolute top-2 left-2 z-10 p-0'
            onClick={e => e.stopPropagation()}>
            <label className='flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 shadow-sm cursor-pointer whitespace-nowrap hover:bg-white select-none'>
              <Checkbox className='border-2 data-[state=checked]:bg-[#006FFF] data-[state=checked]:border-[#006FFF]' />
              <span className='text-sm text-gray-500'>비교하기</span>
            </label>
          </CardHeader>

          <CardContent className='absolute bottom-3 left-3 right-3 z-10 p-0'>
            <div className='flex flex-col pb-2 items-center justify-center text-white select-none'>
              <h3 className='text-xl font-bold'>{name}</h3>
              <p className='text-xs'>{job}</p>
            </div>
            <div
              className={`absolute right-0 bottom-0 text-white font-bold px-2 py-1.5 rounded-sm text-xs ${scoreBg(score)} cursor-default`}>
              {score}점
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
