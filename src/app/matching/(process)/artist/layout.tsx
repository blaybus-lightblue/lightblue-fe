'use client'

import { ArtistMatchingResultProvider } from '@/providers/ArtistMatchingResultProvider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ArtistMatchingResultProvider>{children}</ArtistMatchingResultProvider>
}
