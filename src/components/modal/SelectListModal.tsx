// /* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
// import { useModalControl } from '../shadcn/modal'
// import { ModalWrapper } from './ModalWrapper'
// import { ModalTitle } from './ModalTitle'
// import { ScrollArea } from '../shadcn/scroll-area'
// import { Button } from '../shadcn/button'
// import { ComponentProps, Key, ReactNode } from 'react'
// import { cn } from '@/lib/utils'

// export interface SelectListModalProps<T>
//   extends Omit<ComponentProps<'div'>, 'title'> {
//   title: ReactNode

//   options: { label: string; value: T }[]
// }

// export const SelectListModal = <T extends unknown>({
//   options,
//   title,
//   className,
//   ...rest
// }: SelectListModalProps<T>) => {
//   const modal = useModalControl()

//   const onClickItem = (value: T) => {
//     modal.close({ closedBy: 'button', value })
//   }

//   return (
//     <ModalWrapper className={cn('h-[460px] pb-0', className)} {...rest}>
//       <ModalTitle text={'지역 선택'} hideClose />

//       <ScrollArea className='h-[calc(100%-48px)]'>
//         {options.map(option => {
//           return (
//             <Button
//               className='w-full bg-transparent hover:bg-primitive-color-primary-50 text-black p-[12px] cursor-pointer'
//               key={
//                 typeof option.value === 'object'
//                   ? JSON.stringify(option.value)
//                   : (option.value as Key)
//               }
//               onClick={() => onClickItem(option.value)}>
//               {option.label}
//             </Button>
//           )
//         })}
//       </ScrollArea>
//     </ModalWrapper>
//   )
// }

/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { useModalControl } from '../shadcn/modal'
import { ModalWrapper } from './ModalWrapper'
import { ModalTitle } from './ModalTitle'
import { ScrollArea } from '../shadcn/scroll-area'
import { Button } from '../shadcn/button'
import { ComponentProps, Key, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SelectListModalProps<T>
  extends Omit<ComponentProps<'div'>, 'title'> {
  title: ReactNode

  options: { label: string; value: T }[]
}

export const SelectListModal = <T extends unknown>({
  options,
  title,
  className,
  ...rest
}: SelectListModalProps<T>) => {
  const modal = useModalControl()

  const onClickItem = (value: T) => {
    modal.close({ closedBy: 'button', value })
  }

  return (
    <ModalWrapper className={cn('h-[460px] pb-0', className)} {...rest}>
      {/* <ModalTitle text={'지역 선택'} hideClose /> */}

      <ScrollArea className='h-[calc(100%-48px)]'>
        {options.map(option => {
          return (
            <Button
              className='w-full bg-transparent hover:bg-primitive-color-primary-50 text-black p-[12px] cursor-pointer'
              key={
                typeof option.value === 'object'
                  ? JSON.stringify(option.value)
                  : (option.value as Key)
              }
              onClick={() => onClickItem(option.value)}>
              {option.label}
            </Button>
          )
        })}
      </ScrollArea>
    </ModalWrapper>
  )
}
