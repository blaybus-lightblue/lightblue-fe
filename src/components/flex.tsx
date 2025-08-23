import { ComponentProps, FC, forwardRef, JSX, Ref, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export type FlexProps<T extends keyof JSX.IntrinsicElements = 'div'> = Omit<
  ComponentProps<T>,
  'component'
> & {
  gap?: number
  vertical?: boolean
  wrap?: boolean
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'normal'
    | 'stretch'
    | 'baseline'
    | 'space-evenly'
    | 'space-around'
    | 'space-between'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline' | 'normal'
  component?: keyof JSX.IntrinsicElements
}

export const Flex = forwardRef(
  <T extends keyof JSX.IntrinsicElements>(
    {
      className,
      gap = 0,
      vertical,
      justify = 'normal',
      align = 'normal',
      wrap,
      component,
      ...props
    }: FlexProps<T>,
    ref: Ref<Element>
  ) => {
    const Component = useMemo(
      () => component ?? 'div',
      [component]
    ) as unknown as FC

    const justifyContentClass = useMemo(() => {
      switch (justify) {
        case 'start':
          return 'justify-start'
        case 'end':
          return 'justify-end'
        case 'center':
          return 'justify-center'
        case 'space-between':
          return 'justify-between'
        case 'space-around':
          return 'justify-around'
        case 'space-evenly':
          return 'justify-evenly'
        case 'normal':
          return 'justify-normal'
        case 'stretch':
          return 'justify-stretch'
        case 'baseline':
          return 'justify-baseline'
        default:
          return ''
      }
    }, [justify])

    const alignItemsClass = useMemo(() => {
      switch (align) {
        case 'start':
          return 'items-start'
        case 'end':
          return 'items-end'
        case 'center':
          return 'items-center'
        case 'stretch':
          return 'items-stretch'
        case 'baseline':
          return 'items-baseline'
        default:
          return ''
      }
    }, [align])

    const wrapClass = useMemo(() => (wrap ? 'flex-wrap' : ''), [wrap])
    const directionClass = useMemo(
      () => (vertical ? 'flex-col' : 'flex-row'),
      [vertical]
    )

    return (
      <Component
        ref={ref}
        style={{ gap }}
        className={twMerge(
          `flex ${justifyContentClass} ${alignItemsClass} ${wrapClass} ${directionClass}`,
          className
        )}
        {...props}
      />
    )
  }
)

Flex.displayName = 'Flex'
