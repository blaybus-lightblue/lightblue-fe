import { Checkbox } from '../shadcn/checkbox'
import { Flex } from '../flex'
import { ReactNode, useId } from 'react'
import { cn } from '@/lib/utils'

export interface MathcingResultCardProps {
  image: string
  checked?: boolean
  onCheckedChange?: (value: boolean) => void
  title: ReactNode
  description: ReactNode
  className?: string
  hideCompare?: boolean
  score: number
}

export const MatchingResultCard = ({
  image,
  checked,
  onCheckedChange,
  title,
  description,
  className,
  hideCompare,
  score,
}: MathcingResultCardProps) => {
  const id = useId()
  return (
    <div
      className={cn(
        'relative shrink-0 p-[16px] w-[346px] h-[244px] rounded-[16px]',
        className
      )}
      style={{ backgroundImage: `url(${image})` }}>
      {!hideCompare && (
        <div className='rounded-[12px] bg-semantic-background-bg-2 w-[104px] py-[12px]'>
          <Flex gap={8} justify='center' align='center'>
            <Checkbox
              id={id}
              checked={checked}
              onCheckedChange={onCheckedChange}
            />
            <label htmlFor={id}>비교하기</label>
          </Flex>
        </div>
      )}
      <Flex
        align='center'
        vertical
        className='absolute bottom-[24px] w-[calc(100%-12px)] translate-x-[-8px]'>
        <h2 className='text-white'>{title}</h2>
        <p className='caption-m text-white'>{description}</p>
      </Flex>
      <div
        className={`py-[5px] px-[10px] text-white caption-m absolute right-[10px] bottom-[10px] rounded-[5px] ${score >= 90 ? 'bg-green-300' : score >= 50 ? 'bg-yellow-300' : 'bg-red-300'}`}>
        {score}점
      </div>
    </div>
  )
}
