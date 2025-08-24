'use client'

import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../shadcn/button'

export default function Header() {
  const { isLogin } = useAuth()
  const router = useRouter()

  // const handleLogout = async () => {
  //   await logout()
  //   router.push('/')
  // }

  const menuItems = [
    { label: 'ARTIST & PROJECT', href: '/matching' },
    { label: '엔터프라이즈(기업용)', href: '/company' },
    { label: '예술가 전환', href: '' },
  ]

  const iconItems = [
    { name: 'message', icon: '/icons/message.svg' },
    { name: 'notification', icon: '/icons/bell.svg' },
    { name: 'mypage', icon: '/icons/user.svg' },
  ]

  return (
    <header className='w-full bg-white border-b border-gray-200 px-6 py-4'>
      <div className='max-w-[1920px] mx-auto flex items-center justify-between'>
        <Link href='/' className='flex flex-col cursor-pointer z-99'>
          <Image src='/logo.svg' alt='logo' width={120} height={48} />
        </Link>

        <nav className='flex items-center space-x-8'>
          {menuItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className='text-[#464A4D] text-sm font-bold transition-colors'>
              {item.label}
            </Link>
          ))}

          {isLogin ? (
            <div className='flex items-center space-x-4'>
              <Link
                href='/artist/profile/setup'
                className='text-gray-900 font-medium transition-colors'>
                예술가 전환
              </Link>

              <div className='ml-12 flex items-center space-x-4'>
                {iconItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => router.push(item.name)}
                    className='!mr-0 rounded-lg cursor-pointer bg-white transition-colors'>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={48}
                      height={48}
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <Button
              variant='outline'
              onClick={() => router.push('/login')}
              className='cursor-pointer bg-semantic-cta-cta-secondary text-semantic-cta-cta-secondary-text border-none'>
              로그인/회원가입
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
