import Image from 'next/image'
import { Flex } from '@/components/flex'
import Link from 'next/link'

export default async function Page() {
  return (
    <>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1]'
        style={{
          backgroundImage: "url('/background.svg')",
        }}
      />
      <Flex
        align='center'
        justify='center'
        vertical
        className='absolute inset-0'>
        <Flex align='center' gap={30} className='mb-[30px]'>
          <Image
            src='/matching_title.png'
            width={110}
            height={90}
            className='aspect-auto h-[116px]!'
            alt='matching title'
          />
          <h1 className='headline-l'>어떤 분야의 매칭을 해드릴까요?</h1>
        </Flex>
        <Flex justify='space-between' gap={31}>
          <MatchingRouteCard
            href='/matching/project'
            image='/matching_project.png'
            title='프로젝트'
          />
          <MatchingRouteCard
            href='/matching/artist'
            image='/matching_artist.png'
            title='예술가'
          />
        </Flex>
      </Flex>
    </>
  )
}

const MatchingRouteCard = ({
  href,
  image,
  title,
}: {
  href: string
  image: string
  title: string
}) => {
  return (
    <Link
      prefetch={false}
      href={href}
      className='
      drop-shadow
    bg-white
      px-[80px]
      h-[480px]
      rounded-[20px]
      shadow-[0px_4px_12px_rgba(0,0,0,0.1)] 
      border 
      border-[#e8eef2]/50
      relative 
      overflow-hidden
      cursor-pointer
      transition-all
      duration-300
      hover:shadow-[0px_8px_24px_rgba(0,0,0,0.15)]
      hover:scale-[1.02]'>
      <Flex vertical align='center'>
        <Image src={image} width={384} height={384} alt='' />
        <p className='title1'>{title}</p>
      </Flex>
    </Link>
  )
}
