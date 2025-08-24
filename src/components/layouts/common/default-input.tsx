'use client'

import * as React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isPassword?: boolean
  onTogglePassword?: () => void
  showPassword?: boolean
  type?: string
}

export const DefaultInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      type,
      leftIcon,
      rightIcon,
      isPassword = false,
      onTogglePassword,
      showPassword = false,
      ...inputProps
    } = props

    const [internalShowPassword, setInternalShowPassword] =
      React.useState(false)

    const shouldShowPassword = onTogglePassword
      ? showPassword
      : internalShowPassword

    const inputType = isPassword
      ? shouldShowPassword
        ? 'text'
        : 'password'
      : type

    const handleTogglePassword = () => {
      if (onTogglePassword) {
        onTogglePassword()
      } else {
        setInternalShowPassword(!internalShowPassword)
      }
    }

    return (
      <div className='relative'>
        {/* Left Icon */}
        {leftIcon && (
          <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8c9499]'>
            {leftIcon}
          </div>
        )}

        {/* Input - 커스텀 props 제외하고 나머지만 전달 */}
        <input
          {...inputProps}
          ref={ref}
          type={inputType}
          className={cn(
            'flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            leftIcon && 'pl-12',
            (rightIcon || isPassword) && 'pr-12',
            className
          )}
        />

        {/* Right Icon or Password Toggle */}
        {(rightIcon || isPassword) && (
          <div className='absolute right-4 top-1/2 transform -translate-y-1/3'>
            {isPassword ? (
              <button
                type='button'
                onClick={handleTogglePassword}
                className='text-[#8c9499] hover:text-[#757b80] focus:outline-none'
                tabIndex={-1}>
                {shouldShowPassword ? (
                  <EyeOff className='w-5 h-5' />
                ) : (
                  <Eye className='w-5 h-5' />
                )}
              </button>
            ) : (
              <div className='text-[#8c9499]'>{rightIcon}</div>
            )}
          </div>
        )}
      </div>
    )
  }
)

DefaultInput.displayName = 'DefaultInput'
