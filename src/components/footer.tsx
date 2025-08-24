'use client'

import Link from 'next/link'

export default function Footer() {
  const menuItems = [
    {
      label: '서비스 약관',
      href: '/about',
    },
    {
      label: '개인정보 보호정책',
      href: '/privacy',
    },
    {
      label: '문의',
    },
    {
      label: '사이트맵',
      href: '/contact',
    },
  ]
  return (
    <footer className='h-[116px] w-full bg-primitive-color-alpha-neutral-dark-90 text-white  px-6'>
      <div className='max-w-[1200px] mx-auto h-full flex items-center justify-between'>
        <div className='flex flex-wrap gap-8 text-sm text-text-300'>
          {menuItems.map(item => (
            <Link
              key={item.label}
              href={item.href || '/'}
              className='hover:text-white transition-colors'>
              {item.label}
            </Link>
          ))}
        </div>

        <div className='text-sm text-gray-400'>
          © 2025 movetum All rights reserved.
        </div>
      </div>
    </footer>
  )
}
