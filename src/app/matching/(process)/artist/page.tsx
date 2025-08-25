'use client'
import { useModal } from '@/components/shadcn/modal'
import { ProgressBar } from '@/components/ProgressBar'
import { SelectListModal } from '@/components/modal/SelectListModal'
import {
  CITIES,
  MATCHING_FINISH_DELAY,
  PORTFOLIO_EXISTENCE,
  YEARS_OF_CARRIER,
} from '@/consts'
import { ResponseProps } from '@/components/chat/Response'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Flex } from '@/components/flex'
import { Chat } from '@/components/chat/Chat'
import { isEqual, isNil } from 'lodash-es'
import { LoadingMatching } from '@/components/matching/LoadingMatching'
import { useGetAllArtists } from '@/apis/artist.queries'
import { useRouter } from 'next/navigation'
import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'

export default function Page() {
  const router = useRouter()
  const [modal, modalCtx] = useModal()
  const { setResult } = useArtistStore(state => state)
  const [currentResponses, setCurrentResponses] = useState<
    SelectOption['value'][]
  >([])
  const [isMatching, setIsMatching] = useState(false)

  const { data, isSuccess } = useGetAllArtists(
    {
      activityArea: currentResponses?.[0],
      hasPortfolios: currentResponses?.[2],
      career: currentResponses?.[1],
    },
    undefined,
    { enabled: isMatching }
  )

  const responses: ResponseProps[] = useMemo(
    () => [
      {
        text: '필터링할 정보를 알려주시면 3개 이상의 프로젝트와 예술가가 매칭돼요.',
      },
      {
        text: '원하시는 지역을 선택해주세요.',
        buttonProps: {
          onClick: () =>
            modal
              .open({
                component: () => (
                  <SelectListModal options={CITIES} title='지역 선택' />
                ),
              })
              .then(res => {
                return {
                  label:
                    CITIES.find(item => isEqual(item.value, res.value))
                      ?.label ?? '',
                  value: res.value,
                }
              }),
          buttonText: '지역 선택',
        },
      },
      {
        text: '원하시는 경력을 선택해주세요.',
        buttonProps: {
          onClick: () =>
            modal
              .open({
                component: () => (
                  <SelectListModal
                    options={YEARS_OF_CARRIER}
                    title='협업 유형'
                    className='h-[300px]'
                  />
                ),
              })
              .then(res => {
                return {
                  label:
                    YEARS_OF_CARRIER.find(item =>
                      isEqual(item.value, res.value)
                    )?.label ?? '',
                  value: res.value,
                }
              }),
          buttonText: '경력 선택하기',
        },
      },
      {
        text: '포트폴리오 유무를 선택해주세요.',
        buttonProps: {
          onClick: () =>
            modal
              .open({
                component: () => (
                  <SelectListModal
                    options={PORTFOLIO_EXISTENCE}
                    title='포트폴리오 유무'
                    className='h-[120px]'
                  />
                ),
              })
              .then(res => {
                return {
                  label:
                    PORTFOLIO_EXISTENCE.find(item =>
                      isEqual(item.value, res.value)
                    )?.label ?? '',
                  value: res.value,
                }
              }),
          buttonText: '포트폴리오 유무 선택하기',
        },
      },
      {
        text: '지금부터 예술가 매칭을 시작하겠습니다.',
      },
    ],
    [modal]
  )

  const percentage = Math.round(
    (currentResponses.length /
      responses.filter(item => !isNil(item.buttonProps)).length) *
      100
  )

  useEffect(() => {
    if (
      currentResponses.length ===
      responses.filter(item => !isNil(item.buttonProps)).length
    ) {
      setTimeout(() => {
        setIsMatching(true)
      }, MATCHING_FINISH_DELAY)
    }
  }, [currentResponses, responses])

  useEffect(() => {
    if (!isNil(data?.data.result?.content) && isSuccess) {
      // setResult(data.data.result.content)

      //@TODO: 삭제
      setResult([
        {
          id: 1,
          accountId: 1001, // 예시 계정 ID (실제로는 데이터베이스에서 생성)
          name: '김서연',
          phone: '010-1234-5678', // 예시 전화번호
          email: 'kimseoyeon@example.com', // 예시 이메일
          career: 3, // "경력 3년"에서 추출
          jobField: '작가', // 모든 사람이 작가이므로 공통값
          activityArea: '서울', // "서울 기반"에서 추출
          activityField: '인물화', // "인물화 전문"에서 추출
          desiredCollaborationField: '초상화, 커미션 작업', // 전문 분야를 바탕으로 추정
          introduction:
            '3년간 인물화 전문으로 활동하며 섬세한 표현력을 바탕으로 한 작품을 선보이고 있습니다.',
          portfolios: [
            {
              url: '/1.jpg',
            },
          ],
        },
        {
          id: 2,
          accountId: 1002,
          name: '박민준',
          phone: '010-2345-6789',
          email: 'parkminjooon@example.com',
          career: 5, // "경력 5년"에서 추출
          jobField: '작가',
          activityArea: '부산', // "부산 기반"에서 추출
          activityField: '풍경화, 추상화', // "풍경화, 추상화 전문"에서 추출
          desiredCollaborationField: '갤러리 전시, 공공 미술',
          introduction:
            '5년간 풍경화와 추상화 작업을 통해 자연과 감정의 조화를 표현하는 작가입니다.',
          portfolios: [
            {
              url: '/3.jpg',
            },
          ],
        },
        {
          id: 3,
          accountId: 1003,
          name: '이지은',
          phone: '010-3456-7890',
          email: 'leejieun@example.com',
          career: 2, // "경력 2년"에서 추출
          jobField: '작가',
          activityArea: '대구', // "대구 기반"에서 추출
          activityField: '디지털 아트, 일러스트', // "디지털 아트, 일러스트 전문"에서 추출
          desiredCollaborationField: '웹툰, 게임 아트, 브랜딩',
          introduction:
            '디지털 매체를 활용한 현대적 감각의 일러스트 작업을 전문으로 합니다.',
          portfolios: [
            {
              url: '/2.jpg',
            },
          ],
        },
        {
          id: 4,
          accountId: 1004,
          name: '최현우',
          phone: '010-4567-8901',
          email: 'choihyunwoo@example.com',
          career: 7, // "경력 7년"에서 추출
          jobField: '조각가', // 조각 전문이므로 좀 더 구체적으로 설정
          activityArea: '인천', // "인천 기반"에서 추출
          activityField: '조각, 설치미술', // "조각, 설치미술 전문"에서 추출
          desiredCollaborationField: '공공조형물, 미술관 설치작업',
          introduction:
            '7년간 조각과 설치미술을 통해 공간과 관객의 상호작용을 탐구해왔습니다.',
          portfolios: [
            {
              url: '/1.jpg',
            },
          ],
        },
        {
          id: 5,
          accountId: 1005,
          name: '정수아',
          phone: '010-5678-9012',
          email: 'jungsuah@example.com',
          career: 4, // "경력 4년"에서 추출
          jobField: '작가',
          activityArea: '광주', // "광주 기반"에서 추출
          activityField: '수채화, 아크릴화', // "수채화, 아크릴화 전문"에서 추출
          desiredCollaborationField: '개인 초상화, 풍경화 의뢰',
          introduction:
            '전통적인 회화 기법을 바탕으로 한 따뜻하고 섬세한 작품을 만들어갑니다.',
          portfolios: [
            {
              url: '/4.jpg',
            },
          ],
        },
      ])
      router.push('/matching/artist/result')
    }
  }, [isSuccess, router, data, setResult])

  const onProcess = useCallback((responses: SelectOption[]) => {
    setCurrentResponses(responses.map(item => item.value))
  }, [])

  return (
    <div className='w-full max-w-4xl mx-auto px-6 py-8'>
      {/* 헤더 섹션 */}
      <div className='mb-8'>
        <h1 className='text-2xl font-bold text-gray-900 mb-2'>예술가 매칭</h1>
        <p className='text-gray-600'>
          원하시는 조건을 선택해주시면 최적의 예술가를 찾아드립니다
        </p>
      </div>

      {/* 진행률 섹션 */}
      <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-semibold text-gray-800'>진행 상황</h2>
          <span className='text-2xl font-bold text-blue-600'>
            {percentage}%
          </span>
        </div>
        <ProgressBar value={percentage} className='h-3' />
        <div className='mt-3 text-sm text-gray-500'>
          {currentResponses.length} /{' '}
          {responses.filter(item => !isNil(item.buttonProps)).length} 단계 완료
        </div>
      </div>

      {/* 채팅 섹션 */}
      <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6'>
        {isMatching ? (
          <LoadingMatching />
        ) : (
          <Chat responses={responses} onProcess={onProcess} />
        )}
      </div>

      {modalCtx}
    </div>
  )
}
