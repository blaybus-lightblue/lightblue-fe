import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, max = 100, className, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div className='w-full space-y-2'>
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden rounded-full bg-slate-100', // 이미지의 연한 회색 배경
            className
          )}
          {...props}>
          <div
            className={cn(
              'h-full rounded-full transition-all duration-700 ease-out bg-primitive-color-primary-700'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
