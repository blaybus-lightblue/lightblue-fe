'use client'
import { MatchingResultPageTemplate } from '@/components/pageTemplates/MatchingResultPageTemplate'

import { useArtistStore } from '@/providers/ArtistMatchingResultProvider'
import { isNil } from 'lodash-es'
import { useState } from 'react'

export default function Page() {
  let { result } = useArtistStore(state => state)
  const [compareList, setCompareList] = useState<number[]>([])

  result = [
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
  ]
  return (
    <MatchingResultPageTemplate>
      <MatchingResultPageTemplate.ImageDisplayer
        data={result.map(item => {
          const res = {
            image: item.portfolios?.[0].url ?? '',
            title: item.name ?? '',
            description: item.jobField ?? '',
            checked: compareList.includes(item.id ?? -1),
            onCheckedChange: () => {
              if (isNil(item.id)) {
                return
              }

              if (compareList.includes(item.id)) {
                setCompareList(prev => prev.filter(_item => _item !== item.id))
                return
              }

              console.log(compareList)
              if (compareList.length >= 3) {
                alert('최대 3개까지 비교가능합니다.')
                return
              }
              setCompareList(prev => [...prev, item.id ?? -1])
            },
          }

          console.log(res)
          return res
        })}
      />
      <MatchingResultPageTemplate.ImageCompareSection
        data={result
          .filter(item => {
            return compareList.includes(item.id ?? -1)
          })
          .map(item => ({
            image: item.portfolios?.[0].url ?? '',
            title: item.name ?? '',
            description: item.jobField ?? '',
          }))}
      />
    </MatchingResultPageTemplate>
  )
}
