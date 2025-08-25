// import { ComponentProps } from 'react'
// import { Flex } from '../flex'
// import { Button } from '../shadcn/button'
// import { cn } from '@/lib/utils'

// export interface ResponseProps extends ComponentProps<'div'> {
//   text: string
//   buttonProps?: {
//     onClick: () => Promise<SelectOption | undefined>
//     buttonText: string
//     disabled?: boolean
//   }
// }

// export const Response = ({
//   text,
//   buttonProps,
//   className,
//   ...rest
// }: ResponseProps) => {
//   return (
//     <div
//       className={cn(
//         'bg-semantic-background-bg-2 p-[16px] max-w-[285px] rounded-[4px]',
//         className
//       )}
//       {...rest}>
//       <p className='caption-l'>{text}</p>
//       {buttonProps && (
//         <Button
//           disabled={buttonProps.disabled}
//           variant='default'
//           className='w-full rounded-[6px] bg-primitive-color-primary-700 py-[10px] text-white cursor-pointer hover:bg-primitive-color-primary-700'
//           onClick={buttonProps.onClick}>
//           <Flex justify='center' className='button1'>
//             {buttonProps.buttonText}
//           </Flex>
//         </Button>
//       )}
//     </div>
//   )
// }

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
        'bg-gradient-to-br from-gray-50 to-white p-6 max-w-[320px] rounded-2xl shadow-sm border border-gray-100',
        className
      )}
      {...rest}>
      <p className='text-gray-800 leading-relaxed mb-4'>{text}</p>
      {buttonProps && (
        <Button
          disabled={buttonProps.disabled}
          variant='default'
          className='w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 py-3 text-white font-medium shadow-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
          onClick={buttonProps.onClick}>
          <Flex justify='center' className='text-sm font-medium'>
            {buttonProps.buttonText}
          </Flex>
        </Button>
      )}
    </div>
  )
}
