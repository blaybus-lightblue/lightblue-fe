'use client'

import * as React from 'react'
import { ChevronsUpDown, Check, Funnel } from 'lucide-react'
import { Button } from '@/components/shadcn/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn/popover'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/shadcn/command'
import { cn } from '@/lib/utils'
import { CATEGORY_OPTIONS, CategoryValue } from '@/consts'

type FilterComboBoxProps = {
  value?: CategoryValue
  onChange?: (val: CategoryValue) => void
  placeholder?: string
  className?: string
}

export function FilterComboBox({
  value = 'all',
  onChange,
  placeholder = '필터 선택',
  className,
}: FilterComboBoxProps) {
  const [open, setOpen] = React.useState(false)
  const selected = CATEGORY_OPTIONS.find(o => o.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={cn(
            'h-9 w-[160px] justify-between rounded-sm',
            'transition-colors hover:border-gray-300 text-gray-600',
            className
          )}>
          <span className='flex items-center gap-2'>
            <Funnel className='size-4 opacity-70' />
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown className='size-4 opacity-50' />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandList>
            <CommandGroup>
              {CATEGORY_OPTIONS.map(o => (
                <CommandItem
                  key={o.value}
                  value={o.value}
                  onSelect={v => {
                    onChange?.(v as CategoryValue)
                    setOpen(false)
                  }}>
                  {o.label}
                  <Check
                    className={cn(
                      'ml-auto size-4',
                      value === o.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
