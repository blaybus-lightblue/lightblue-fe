import type { Metadata } from 'next'
import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { CounterStoreProvider } from '@/providers/CounterStoreProvider'
import { AuthProvider } from '@/contexts/AuthContext'
import localFont from 'next/font/local'
import Header from '@/components/layouts/header'

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--typography-primitive-font-family-pretendard',
})

export const metadata: Metadata = {
  title: '무브텀 | 예술가와 프로젝트를 연결하는 협업 매칭 플랫폼',
  description:
    '예술가의 포트폴리오를 브랜드화하고, AI 매칭으로 적합한 크루·프로젝트를 연결합니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={`${Pretendard.className}`}>
        <ReactQueryProvider>
          <CounterStoreProvider>
            <AuthProvider>
              <div className='min-h-screen grid grid-rows-[auto_1fr]'>
                <Header />
                <main className='w-full'>{children}</main>
              </div>
            </AuthProvider>
          </CounterStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
