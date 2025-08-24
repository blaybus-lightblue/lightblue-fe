import { useModalControl } from '@/components/shadcn/modal'
import { Flex, FlexProps } from '@/components/flex'
import { X } from 'lucide-react'
import { Button } from '@/components/shadcn/button'
import { twMerge } from 'tailwind-merge'
import { omit } from 'lodash-es'
import { ReactNode } from 'react'

interface IModalTitle extends FlexProps {
  text?: ReactNode | string
  hideClose?: boolean
}

export const ModalTitle = ({ text, hideClose, ...rest }: IModalTitle) => {
  const { close } = useModalControl()
  return (
    <div className='border-b-1 border-semantic-divider-divider-1 '>
      <Flex
        justify='center'
        align='center'
        className={twMerge('py-[12px]', rest.className)}
        {...omit(rest, 'className')}>
        {typeof text === 'string' ? (
          <p className='pr-2 title_t3'>{text}</p>
        ) : (
          <>{text}</>
        )}
        {!hideClose && (
          <Button
            onClick={() => close({ closedBy: 'closeButton' })}
            variant='ghost'>
            <X />
          </Button>
        )}
      </Flex>
    </div>
  )
}
