import { ComponentProps } from 'react'
import { Flex } from '../flex'
import { Button } from '../shadcn/button'
import { cn } from '@/lib/utils'

export interface ResponseProps extends ComponentProps<'div'> {
  text: string
  buttonProps?: {
    onClick: () => Promise<SelectOption | undefined>
    buttonText: string
    disabled?: boolean
  }
}

export const Response = ({
  text,
  buttonProps,
  className,
  ...rest
}: ResponseProps) => {
  return (
    <div
      className={cn(
        'bg-semantic-background-bg-2 p-[16px] max-w-[285px] rounded-[4px]',
        className
      )}
      {...rest}>
      <p className='caption-l'>{text}</p>
      {buttonProps && (
        <Button
          disabled={buttonProps.disabled}
          variant='default'
          className='w-full rounded-[6px] bg-primitive-color-primary-700 py-[10px] text-white cursor-pointer hover:bg-primitive-color-primary-700'
          onClick={buttonProps.onClick}>
          <Flex justify='center' className='button1'>
            {buttonProps.buttonText}
          </Flex>
        </Button>
      )}
    </div>
  )
}
