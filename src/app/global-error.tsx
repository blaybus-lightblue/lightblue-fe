'use client'

import Link from 'next/link'
import { Button } from '@/components/shadcn/button'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function GlobalError() {
  return (
    <div className='h-full flex flex-col'>
      <div className='min-h-[calc(100vh-197px)]  space-y-4 flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='relative inline-block'>
          <Image src='/icons/505.svg' alt='505' width={160} height={161} />
        </div>

        <h1 className='headline-l text-semantic-text-text-1'>
          502 Bad Gateway
        </h1>

        <p className='body-2 !leading-[1.8] text-primitive-color-neutral-600 text-center'>
          <strong className='text-primitive-color-neutral-1100'>
            일시적인 오류가 발생했습니다.
          </strong>
          <br />
          서비스 이용에 불편을 드려 죄송합니다.
          <br />
          잠시 후 다시 이용해주세요.
        </p>

        <Button
          size='lg'
          variant='outline'
          className='font-bold mt-8 button-1 w-[173px] h-14 cursor-pointer  text-semantic-cta-cta border-semantic-cta-cta text-md rounded-lg transition-all duration-200 '>
          <Link href='/'>홈으로</Link>
        </Button>
      </div>
      <Footer />
    </div>
  )
}
