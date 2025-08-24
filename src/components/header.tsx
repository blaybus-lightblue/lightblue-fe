'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from './shadcn/button'

export default function Header() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  const menuItems = [
    {
      label: 'ARTIST & PROJECT',
      src: '/matching',
    },
    {
      label: '엔터프라이즈(기업용)',
      src: '/company',
    },
    {
      label: '예술가 전환',
      src: '',
    },
  ]

  const iconItems = [
    {
      src: 'message',
      icon: '/icons/message.svg',
    },
    {
      src: 'notification',
      icon: '/icons/bell.svg',
    },

    {
      src: 'mypage',
      icon: '/icons/user.svg',
    },
  ]

  return (
    <header className='w-full bg-white border-b border-gray-200 px-6 py-4'>
      <div className='max-w-[1920px] mx-auto flex items-center justify-between'>
        <Link
          href='/'
          className='flex flex-col cursor-pointer z-99'
          onClick={() => {
            router.push('/')
          }}>
          <Image src='/logo.svg' alt='logo' width={120} height={48} />
        </Link>

        <nav className='flex items-center space-x-8'>
          {menuItems.map(item => (
            <Link
              key={item.label}
              href={item.src}
              className='text-[#464A4D] text-sm font-bold hover:text-blue-600 transition-colors'>
              {item.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <div className='flex items-center space-x-4'>
              <Link
                href='/artist/profile/setup'
                className='text-gray-900 font-medium hover:text-blue-600 transition-colors'>
                예술가 전환
              </Link>

              <div className='ml-12 flex items-center space-x-4'>
                {iconItems.map(item => (
                  <button
                    key={item.src}
                    onClick={() => {
                      router.push(item.src)
                    }}
                    className='rounded-lg cursor-pointer !mr-0 bg-white transition-colors'>
                    <Image
                      src={item.icon}
                      alt={item.src}
                      width={48}
                      height={48}
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className='flex items-center space-x-3'>
              <Button
                variant='outline'
                size='default'
                onClick={() => {
                  router.push('/login')
                }}
                className='cursor-pointer bg-semantic-cta-cta-secondary rounded-radius-xs label-s border-none  text-semantic-cta-cta-secondary-text hover:text-semantic-cta-cta-secondary-text hover:bg-semantic-cta-cta-secondary-hover'>
                로그인/회원가입
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
