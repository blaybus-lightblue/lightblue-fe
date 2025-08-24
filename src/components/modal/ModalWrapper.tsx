import { ComponentProps, PropsWithChildren } from 'react'
import { Flex } from '@/components/flex'
import { twMerge } from 'tailwind-merge'

export const ModalWrapper = ({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentProps<typeof Flex>>) => (
  <Flex vertical className={className} {...props}>
    {children}
  </Flex>
)
