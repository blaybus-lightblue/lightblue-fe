import { Flex } from '@/components/flex'
import { ArtistSidebar } from '@/components/sidebars/ArtistSidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Flex justify='center'>
      <Flex align='center' vertical className='max-w-[744px] w-full'>
        {children}
      </Flex>
    </Flex>
  )
}
