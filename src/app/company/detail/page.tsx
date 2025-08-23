// 예술가 소개 페이지입니다.. 라우팅 한번 싹 다 정리해야할 것 같아 임시로 여기에 작성하겠습니다!!
import { Card, CardContent } from '@/components/shadcn/card'
import Image from 'next/image'
import CheckIcon from '@/assets/icons/check.svg'
import { Button } from '@/components/shadcn/button'

type ArtistCardProps = {
  name: string
  job: string
  score: number
  imageSrc: string
}

function scoreBg(score: number) {
  if (score >= 90) return 'bg-[#27C840]'
  if (score >= 80) return 'bg-[#FEBC2F]'
  return 'bg-[#FF5F57]'
}

const ArtistHeader = ({ name, job, score, imageSrc }: ArtistCardProps) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Card
        tabIndex={0}
        className='relative w-full aspect-[3.1/1] overflow-hidden rounded-2xl cursor-pointer'>
        <div className='absolute inset-0 group overflow-hidden'>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className='object-cover transition-transform duration-300 group-hover:scale-105'
              priority
            />
          ) : (
            <div className='w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 transition-transform duration-300 group-hover:scale-105' />
          )}
          <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20' />
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black from-20% via-black/75 via-40% to-transparent to-100%' />

        <CardContent className='absolute bottom-3 left-3 right-3 z-10 p-0'>
          <div className='flex flex-col pb-2 items-center justify-center text-white select-none'>
            <h1>{name}</h1>
            <p className='text-sm'>{job}</p>
          </div>
          <div
            className={`absolute right-0 bottom-0 text-white font-bold px-2 py-1.5 rounded-sm text-xs ${scoreBg(score)} cursor-default`}>
            {score}점
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const TableTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-1'>
      <h2 className='text-lg font-extrabold'>{title}</h2>
      <CheckIcon />
    </div>
  )
}

const TableContent = ({ info }: { info: string }) => {
  return (
    <span className='px-3 py-1.5 rounded-md border-1 border-gray-300 bg-white text-sm text-gray-600'>
      {info}
    </span>
  )
}

export default function Page() {
  const artist = {
    name: '최하준',
    job: '벽화, 일러스트',
    score: 95,
    imageSrc: '',
    description: '안녕하세요 최하준입니다.',
    region: '강릉시',
    career: '1년',
    portfolio: '',
  }

  return (
    <div className='bg-blue-50 max-w-4xl mx-auto rounded-xl pb-4'>
      <ArtistHeader
        name={artist.name}
        job={artist.job}
        score={artist.score}
        imageSrc={artist.imageSrc}
      />

      <div className='flex flex-col items-center py-5 gap-10'>
        <div>
          <h1>예술가 소개</h1>
          <p>{artist.description}</p>
        </div>

        <div className='grid grid-cols-[130px_1fr] items-start justify-items-start gap-y-5 gap-x-6'>
          <TableTitle title='전문분야' />
          <TableContent info={artist.job} />

          <TableTitle title='지역' />
          <TableContent info={artist.region} />

          <TableTitle title='경력' />
          <TableContent info={artist.career} />

          <div className='col-span-2'>
            <div className='mb-2 flex items-center gap-1'>
              <TableTitle title='포트폴리오' />
            </div>

            {artist.portfolio ? (
              <div className='w-full rounded-xl overflow-hidden bg-white'>
                <div className='relative w-full aspect-[2/1]'>
                  <Image
                    src={artist.portfolio}
                    alt='포트폴리오'
                    width={270}
                    height={156}
                    className='object-cover'
                  />
                </div>
              </div>
            ) : (
              <div className='w-[270px] aspect-[2/1] rounded-xl overflow-hidden border bg-white' />
            )}
          </div>
        </div>

        <Button className='bg-[#006FFF] hover:bg-white text-white hover:text-[#006FFF] text-xl font-bold px-16 py-7 cursor-pointer'>
          수락하기
        </Button>
      </div>
    </div>
  )
}
