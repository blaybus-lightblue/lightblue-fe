'use client'

import { ProjectMatchingResultProvider } from '@/providers/ProjectMatchingResultProvider'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProjectMatchingResultProvider>{children}</ProjectMatchingResultProvider>
  )
}
