import SortRight from '@/assets/icons/sort-right.svg'
import AI from '@/assets/icons/ai.svg'
import { Button } from '@/components/shadcn/button'
import { ArtistCard } from '@/components/ArtistCard'

type ArtistCardProps = {
  name: string
  job: string
  score: number
  imageSrc: string
  date: string
}

const directApplicants: ArtistCardProps[] = [
  {
    name: '최하준',
    job: '벽화, 일러스트',
    score: 95,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '김도연',
    job: '일러스트',
    score: 79,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '김도연',
    job: '일러스트',
    score: 82,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '김도연',
    job: '일러스트',
    score: 49,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '김도연',
    job: '일러스트',
    score: 55,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '김도연',
    job: '일러스트',
    score: 90,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '김도연',
    job: '일러스트',
    score: 92,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
]
const aiRecommended: ArtistCardProps[] = [
  {
    name: '하준',
    job: '일러스트',
    score: 59,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
  {
    name: '민서',
    job: '벽화',
    score: 88,
    imageSrc: '',
    date: '오전: 10시 49분',
  },
]

export default function Page() {
  return (
    <div className='bg-blue-50 px-3 py-6 max-w-2xl mx-auto rounded-xl'>
      <div className='fixed inset-x-0 bottom-8 z-50 flex justify-center'>
        <Button className='rounded-sm py-5 bg-[#006FFF] hover:bg-white hover:text-[#006FFF] hover:font-bold cursor-pointer'>
          예술가 전체 보기
        </Button>
      </div>

      <div className='flex items-baseline gap-2 mb-6'>
        <h1 className='text-3xl font-bold'>지원현황</h1>
        <h2 className='text-2xl font-bold text-[#464A4D]'>6명</h2>
      </div>

      <div className='flex w-full items-center justify-around rounded-lg border-1 border-gray-300 py-2 mb-8 text-xl text-gray-500'>
        <p>회화(벽화) 0명 수락 가능</p>
        <p>디자인 0명 수락 가능</p>
      </div>

      <section className='mb-8'>
        <div className='flex items-center gap-1 mb-3'>
          <SortRight />
          <p className='text-lg font-bold'>직접지원자</p>
        </div>

        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {directApplicants.map((a, i) => (
            <ArtistCard key={i} {...a} />
          ))}
        </div>
      </section>

      <section>
        <div className='flex items-center gap-1 mb-3'>
          <AI />
          <p className='text-lg font-bold'>AI 추천</p>
        </div>

        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
          {aiRecommended.map((a, i) => (
            <ArtistCard key={i} {...a} />
          ))}
        </div>
      </section>
    </div>
  )
}
