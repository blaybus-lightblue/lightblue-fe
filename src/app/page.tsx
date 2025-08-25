'use client'

import Link from 'next/link'
import { Button } from '@/components/shadcn/button'
import { Badge } from '@/components/shadcn/badge'
import Footer from '@/components/layouts/footer'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className='h-full flex flex-col'>
      <main className='h-full flex-1 flex items-center justify-center relative '>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: "url('/background.svg')",
          }}></div>
        <div className='z-10 space-y-4 text-center px-6 max-w-4xl mx-auto'>
          <Badge
            variant='outline'
            className='mb-6 body-1 text-md px-m w-[92px] bg-transparent backdrop-blur-sm text-semantic-brand-primary border-semantic-brand-primary rounded-full border !h-12'>
            ABOUT
          </Badge>

          <h2 className=' headline-l text-semantic-text-text-1 mb-6 leading-tight'>
            잠재된 능력을 <br /> 무브텀에서 펼쳐보세요
          </h2>

          <p className='label-m text-semantic-text-text-2 mb-12 max-w-2xl mx-auto leading-relaxed'>
            매칭시스템으로 빠르게 예술가와 프로젝트를 컨택하여 수익창출을
            해보세요.
          </p>

          <Button
            size='lg'
            onClick={() => {
              router.push('/matching/select')
            }}
            className='cursor-pointer  h-14 button-1 bg-semantic-cta-cta text-white px-12 py-4 text-md font-bold rounded-lg transition-all duration-200 '>
            시작하기
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
