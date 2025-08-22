import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export type ArtistPageTemplateProps = ComponentProps<'div'>
export const ArtistPageTemplate = ({
  children,
  className,
  ...rest
}: ArtistPageTemplateProps) => {
  return (
    <div className={cn('pl-[31px]', className)} {...rest}>
      {children}
    </div>
  )
}
