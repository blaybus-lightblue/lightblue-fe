import { ArtistSidebar } from '@/components/sidebars/ArtistSidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex'>
      <ArtistSidebar />
      <main>{children}</main>
    </div>
  )
}
