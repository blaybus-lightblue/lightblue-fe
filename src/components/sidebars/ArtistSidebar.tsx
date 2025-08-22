'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/shadcn/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CSSProperties } from 'react'

//@TODO: url,disable 설정 바꿔야함
const ARTIST_MENUS_ITEMS = [
  { title: '프로필', url: '/artist/profile/setup' },
  { title: '내 프로젝트', url: '' },
  { title: '프로젝트 지원', url: '' },
  { title: '알림 설정', url: '' },
  { title: '로그아웃', url: '' },
]

export const ArtistSidebar = () => {
  const pathname = usePathname()
  return (
    <SidebarProvider
      style={{ '--sidebar-width': '168px', width: 'auto' } as CSSProperties}>
      <Sidebar className='[&>div]:data-[sidebar=sidebar]:bg-transparent  border-none'>
        <SidebarContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {ARTIST_MENUS_ITEMS.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className='px-[16px]'>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
