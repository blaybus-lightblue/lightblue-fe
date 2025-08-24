import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import SpinnerSvg from '@/../public/spinner.svg'

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
})

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      small: 'size-[30px]',
      medium: 'size-[48px]',
      large: 'size-[64px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string
  children?: React.ReactNode
}

export const Spinner = ({
  size,
  show,
  children,
  className,
}: SpinnerContentProps) => (
  <span className={spinnerVariants({ show })}>
    <SpinnerSvg className={twMerge(loaderVariants({ size }), className)} />
    {children}
  </span>
)
