import type { Metadata } from 'next'
import './globals.css'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { CounterStoreProvider } from '@/providers/CounterStoreProvider'
import { AuthProvider } from '@/contexts/AuthContext'
import localFont from 'next/font/local'
import Header from '@/components/header'

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--typography-primitive-font-family-pretendard',
})

export const metadata: Metadata = {
  title: '무브텀 - 예술가와 프로젝트를 연결하는 플랫폼',
  description: '예술가와 프로젝트를 연결하는 플랫폼',
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
              <Header />
              {children}
            </AuthProvider>
          </CounterStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
