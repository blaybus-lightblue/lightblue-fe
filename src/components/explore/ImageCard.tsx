'use client'

import * as React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/shadcn/card'
import Image from 'next/image'

type Props = {
  id: string | number
  kind: 'artist' | 'project'

  title: string
  subtitle: string
  imageSrc?: string
}

export const ImageCard = ({ id, kind, title, subtitle, imageSrc }: Props) => {
  const href = `/detail/${kind}/${id}`

  return (
    <Link href={href} className='block'>
      <Card
        role='link'
        tabIndex={0}
        className='relative w-75 aspect-[346/244] overflow-hidden rounded-2xl cursor-pointer'>
        <div className='absolute inset-0 group overflow-hidden'>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
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

        <CardContent className='absolute bottom-3 left-3 right-3 z-10 p-0'>
          <div className='flex flex-col pb-2 items-center justify-center text-white select-none'>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-xs'>{subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
