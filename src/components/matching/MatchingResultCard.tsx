import Image from 'next/image'
import { Button } from '../shadcn/button'
import { Checkbox } from '../shadcn/checkbox'
import { Flex } from '../flex'
import { ReactNode } from 'react'

export interface MathcingResultCardProps {
  image: string
  checked: boolean
  onCheckedChange?: (value: boolean) => void
  title: ReactNode
  description: ReactNode
}

export const MatchingResultCard = ({
  image,
  checked,
  onCheckedChange,
  title,
  description,
}: MathcingResultCardProps) => {
  return (
    <div className='relative w-[346px] h-[244px]'>
      <Button className='rounded-[12px]'>
        <Flex gap={8}>
          <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
          비교하기
        </Flex>
      </Button>
      <Image src={image} alt='' className='rounded-[16px] absolute inset-0' />
      <h2>{title}</h2>
      <p className='caption-m'>{description}</p>
    </div>
  )
}
