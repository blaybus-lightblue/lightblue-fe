import Image from 'next/image'
import { Flex } from '@/components/flex'
import Link from 'next/link'
import { Badge } from '@/components/shadcn/badge'

export default function MatchingSelectPage() {
  const noticeItem = [
    '휴대폰 인증 이후 생성과 매칭이 가능합니다.',
    '프로젝트는 검수 후 게시됩니다.',
    '14일 이내 승인 혹은 거절이 결정되고, 승인 시 프로젝트가 생성이 됩니다.',
  ]

  return (
    <main className='h-full py-20 flex flex-col items-center justify-center gap-6'>
      <Flex align='center' justify='center' vertical className=''>
        <h2 className='headline-l text-primitive-color-primary-700 mb-15'>
          수익 활동을 위한 첫 걸음
        </h2>
        <Flex justify='space-between' gap={31}>
          <SelectCard
            href='/matching/project'
            image='/matching_add.svg'
            title='프로젝트를 생성할래요'
            badgeText='예술가와 협업할 수 있는'
            type='add'
          />
          <SelectCard
            href='/matching/ai'
            image='/matching_ai.svg'
            title='AI매칭 할래요'
            badgeText='예술가 & 프로젝트'
            type='ai'
          />
        </Flex>
      </Flex>
      <section
        className='max-w-[1140px] w-full rounded-3xl border-divider-1 border bg-semantic-background-bg-2 px-6 py-4 md:px-10 md:py-8 shadow-[0_1px_0_rgba(0,0,0,0.02)]'
        aria-labelledby='notice-title'>
        {/* 상단 텍스트 */}
        <div className='mb-6 space-y-1'>
          <Badge variant='outline' className='bg-white !px-2 !py-1'>
            안내사항
          </Badge>
          <h2
            id='notice-title'
            className='mt-1 text-xl leading-8 font-bold text-semantic-text-text-2'>
            프로젝트 생성과 매칭 안내
          </h2>
        </div>

        {/* 리스트 */}
        <ul className='space-y-3 '>
          {noticeItem.map((text, i) => (
            <li key={i} className='flex items-start gap-2'>
              <span
                aria-hidden
                className='mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                <Image
                  src='/icons/check.svg'
                  className='text-semantic-text-text-1'
                  alt='check'
                  width={24}
                  height={24}
                />
              </span>
              <p className='text-sm leading-6 text-semantic-text-text-2'>
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

const SelectCard = ({
  href,
  image,
  title,
  badgeText,
  type,
}: {
  href: string
  image: string
  title: string
  badgeText: string
  type: string
}) => {
  return (
    <Link
      prefetch={false}
      href={href}
      className='
      drop-shadow
      bg-white
      px-[60px]
      w-[550px]
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
      hover:shadow-[0px_8px_24px_rgba(0,0,0,0.15)]'>
      <Flex vertical align='center' className='h-full justify-between py-8'>
        <Image
          src={image}
          width={250}
          height={250}
          alt={title}
          className='object-contain mb-12'
        />
        <div className='text-center space-y-2'>
          <Badge variant={type === 'add' ? 'primary' : 'secondary'}>
            {badgeText}
          </Badge>
          <h3 className='title1 text-semantic-text-text-1 mb-3 leading-[1.4]'>
            {title}
          </h3>
        </div>
      </Flex>
    </Link>
  )
}
