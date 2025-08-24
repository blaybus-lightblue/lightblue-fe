'use client'

import * as React from 'react'
import { Input } from '@/components/shadcn/input'
import { Search, X } from 'lucide-react'

type Props = {
  value: string
  onChange: (value: string) => void
  onEnter?: (value: string) => void
  placeholder?: string
  className?: string
}

export function SearchInput({
  value,
  onChange,
  onEnter,
  placeholder = '검색해보세요.',
  className = '',
}: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.(value)
    }
  }

  return (
    <div className={`relative w-full rounded-sm ${className}`}>
      <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400' />
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className='h-9 pl-9 pr-8 rounded-sm transition-colors  hover:border-gray-300 focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-gray-200'
      />
      {value && (
        <button
          type='button'
          aria-label='검색어 지우기'
          className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'
          onClick={() => onChange('')}>
          <X className='size-4 text-gray-400 hover:text-gray-600' />
        </button>
      )}
    </div>
  )
}
