import { ComponentProps, MouseEventHandler } from 'react'
import { Button } from '../shadcn/button'
import { cn } from '@/lib/utils'

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
    <div
      className={cn(
        'bg-primitive-color-primary-900 text-white p-[16px] rounded-[4px]',
        className
      )}
      {...rest}>
      <p className='caption-l'>{text}</p>
      {onClickEdit && (
        <Button
          onClick={onClickEdit}
          variant='ghost'
          className='underline button2 text-primitive-color-neutral-600'>
          수정
        </Button>
      )}
    </div>
  )
}
