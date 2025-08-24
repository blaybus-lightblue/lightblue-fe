import { ComponentProps, MouseEventHandler } from 'react'
import { Button } from '../shadcn/button'
import { cn } from '@/lib/utils'
import { Flex } from '../flex'

export interface RequestProps extends ComponentProps<'div'> {
  text: string
  onClickEdit?: MouseEventHandler
}

export const Request = ({
  text,
  onClickEdit,
  className,
  ...rest
}: RequestProps) => {
  return (
    <Flex vertical>
      <div
        className={cn(
          'bg-primitive-color-primary-900 text-white p-[16px] rounded-[4px] flex justify-center min-w-[104px]',
          className
        )}
        {...rest}>
        <p className='caption-l'>{text}</p>
      </div>
      {onClickEdit && (
        <Button
          onClick={onClickEdit}
          variant='ghost'
          className='underline button2 text-primitive-color-neutral-600 self-end p-0'>
          수정
        </Button>
      )}
    </Flex>
  )
}
