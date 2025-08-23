import SortRight from '@/assets/icons/sort-right.svg'
export default function Page() {
  console.log('SortRight typeof =', typeof SortRight, SortRight)

  return (
    <div className='bg-blue-50'>
      <div className='flex items-baseline gap-2'>
        <h1 className='text-3xl font-bold'>지원현황</h1>
        <p className='text-2xl font-bold text-[#464A4D]'>6명</p>
      </div>

      <SortRight />
      <p className='text-lg font-bold'>직접지원자</p>

      <p className='text-lg font-bold'>AI 추천</p>
    </div>
  )
}
