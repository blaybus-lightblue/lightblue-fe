import Link from 'next/link'
import { Button } from '@/components/shadcn/button'
import Image from 'next/image'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <div className='h-full flex flex-col'>
      <div className='min-h-[calc(100vh-197px)]  space-y-4 flex flex-col items-center justify-center relative overflow-hidden'>
        <div className='relative inline-block'>
          <Image src='/icons/404.svg' alt='404' width={160} height={161} />
        </div>

        <h1 className='headline-l text-semantic-text-text-1'>
          404 Page Not Found
        </h1>

        <p className='body-1 text-semantic-text-text-2 text-center line-height-180%'>
          방문하려는 페이지의 주소가 잘못 입력되었거나 <br />
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p>

        <Button
          size='lg'
          variant='outline'
          className='font-bold mt-8 button-1  hover:text-semantic-cta-cta w-[173px] h-14 cursor-pointer  text-semantic-cta-cta border-semantic-cta-cta text-md rounded-lg transition-all duration-200 '>
          <Link href='/'>홈으로</Link>
        </Button>
      </div>
      <Footer />
    </div>
  )
}
