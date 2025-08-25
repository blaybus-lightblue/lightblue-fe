import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-full font-normal text-sm',
    'px-5 py-[6px]',
  ].join(' '),
  {
    variants: {
      variant: {
        primary: [
          'bg-semantic-cta-cta-secondary',
          'text-semantic-cta-cta-secondary-text',
        ].join(' '),

        secondary: [
          'bg-semantic-brand-primary',
          'text-white',
          'border border-semantic-brand-primary',
          'focus-visible:ring-semantic-brand-primary/50',
        ].join(' '),

        outline: [
          'bg-transparent',
          'text-semantic-brand-primary',
          'border border-semantic-brand-primary',
          'backdrop-blur-sm',
          'focus-visible:ring-semantic-brand-primary/40',
        ].join(' '),

        destructive: [
          'bg-destructive text-destructive-foreground',
          'border border-destructive',
          'focus-visible:ring-destructive/40',
        ].join(' '),
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }

export function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
