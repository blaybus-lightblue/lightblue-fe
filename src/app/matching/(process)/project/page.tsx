'use client'
import { useModal } from '@/components/shadcn/modal'
import { ProgressBar } from '@/components/ProgressBar'
import { SelectListModal } from '@/components/modal/SelectListModal'
import {
  BUDGET_RANGES,
  CITIES,
  MATCHING_FINISH_DELAY,
  PROJECT_DURATION,
  PROJECT_TYPES,
} from '@/consts'
import { ResponseProps } from '@/components/chat/Response'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Flex } from '@/components/flex'
import { Chat } from '@/components/chat/Chat'
import { isEqual, isNil } from 'lodash-es'
import { LoadingMatching } from '@/components/matching/LoadingMatching'
import { useProjectStore } from '@/providers/ProjectMatchingResultProvider'
import { useMatchProject } from '@/apis/project.queries'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [modal, modalCtx] = useModal()
  const { setResult } = useProjectStore(state => state)
  const [currentResponses, setCurrentResponses] = useState<
    SelectOption['value'][]
  >([])
  const [isMatching, setIsMatching] = useState(false)
  const { data, isSuccess } = useMatchProject(
    currentResponses?.[0],
    currentResponses?.[1],
    currentResponses?.[2],
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
        text: '협업유형을 선택해주세요.',
        buttonProps: {
          onClick: () =>
            modal
              .open({
                component: () => (
                  <SelectListModal
                    options={PROJECT_TYPES}
                    title='협업 유형'
                    className='h-[300px]'
                  />
                ),
              })
              .then(res => {
                return {
                  label:
                    PROJECT_TYPES.find(item => isEqual(item.value, res.value))
                      ?.label ?? '',
                  value: res.value,
                }
              }),
          buttonText: '협업유형 선택하기',
        },
      },
      {
        text: '예산범위를 선택해주세요.',
        buttonProps: {
          onClick: () =>
            modal
              .open({
                component: () => (
                  <SelectListModal
                    options={BUDGET_RANGES}
                    title='예산 범위'
                    className='h-[230px]'
                  />
                ),
              })
              .then(res => {
                return {
                  label:
                    BUDGET_RANGES.find(item => isEqual(item.value, res.value))
                      ?.label ?? '',
                  value: res.value,
                }
              }),
          buttonText: '예산범위 선택하기',
        },
      },
      {
        text: '프로젝트 기간을 선택해주세요.',
        buttonProps: {
          onClick: () =>
            modal
              .open({
                component: () => (
                  <SelectListModal
                    options={PROJECT_DURATION}
                    title='프로젝트 기간'
                    className='h-[192px]'
                  />
                ),
              })
              .then(res => {
                return {
                  label:
                    PROJECT_DURATION.find(item =>
                      isEqual(item.value, res.value)
                    )?.label ?? '',
                  value: res.value,
                }
              }),
          buttonText: '프로젝트 기간 선택하기',
        },
      },
      {
        text: '지금부터 프로젝트 매칭을 시작하겠습니다.',
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
    if (!isNil(data?.result) && isSuccess) {
      setResult(data.result)
      //@TODO 삭제
      setResult([
        {
          id: 1,
          creatorId: 1001,
          creatorName: '김서연',
          title: '시민과 함께하는 벽화 프로젝트',
          projectType: 'COMMUNITY', // 지역사회 참여형 프로젝트
          requirements:
            '미술 경험이 있으신 분, 주말 참여 가능하신 분을 찾습니다. 지역사회에 대한 관심과 열정이 중요합니다.',
          primaryArtField: 'VISUAL_ARTS', // 주 분야: 시각예술
          secondaryArtField: 'DESIGN', // 부 분야: 디자인 (벽화 설계)
          recruitmentCount: 8,
          startDate: '2025-09-15', // ISO 날짜 형식
          activityCity: 'SEOUL',
          expectedBudget: 5000000, // 500만원 - 재료비 및 참여자 활동비
          description:
            '서울 마포구 홍대 인근 골목에 지역 주민들과 함께 만드는 벽화 프로젝트입니다. 지역의 역사와 문화를 담은 스토리텔링을 시각적으로 표현하여 동네의 새로운 랜드마크를 만들어갑니다.',
          referenceUrl: '/1.jpg',
          status: 'RECRUITING', // 현재 참여자 모집 중
          createdAt: '2025-08-20T10:30:00Z', // ISO 8601 날짜-시간 형식
          updatedAt: '2025-08-23T14:15:00Z',
        },

        {
          id: 2,
          creatorId: 1002,
          creatorName: '박민준',
          title: '부산 바다 소리 음악 축제',
          projectType: 'FESTIVAL', // 축제/페스티벌 형태
          requirements:
            '악기 연주 가능자, 보컬리스트, 음향 기술자를 찾습니다. 야외 공연 경험 우대합니다.',
          primaryArtField: 'MUSIC', // 주 분야: 음악
          secondaryArtField: 'PERFORMANCE_ART', // 부 분야: 퍼포먼스 (무대 연출)
          recruitmentCount: 15,
          startDate: '2025-10-10',
          activityCity: 'BUSAN',
          expectedBudget: 12000000, // 1200만원 - 대규모 축제 예산
          description:
            '부산 해운대 해변에서 열리는 3일간의 음악 축제입니다. 바다의 자연스러운 사운드스케이프와 어우러지는 어쿠스틱 음악을 중심으로, 지역 아티스트들과 함께 만드는 특별한 음악 경험을 선사합니다.',
          referenceUrl: '/2.jpg',
          status: 'RECRUITING',
          createdAt: '2025-08-18T09:00:00Z',
          updatedAt: '2025-08-24T16:20:00Z',
        },

        {
          id: 3,
          creatorId: 1003,
          creatorName: '이지은',
          title: 'AI와 함께하는 인터랙티브 미디어 아트',
          projectType: 'DIGITAL', // 디지털 아트 프로젝트
          requirements:
            '프로그래밍 경험(Python, JavaScript), 미디어 아트에 대한 이해, 새로운 기술에 대한 호기심을 가진 분을 찾습니다.',
          primaryArtField: 'DIGITAL_ART', // 주 분야: 디지털 아트
          secondaryArtField: 'MULTIMEDIA', // 부 분야: 멀티미디어
          recruitmentCount: 5, // 소규모 전문가 그룹
          startDate: '2025-09-01',
          activityCity: 'ONLINE', // 온라인 협업 프로젝트
          expectedBudget: 8000000, // 800만원 - 기술 장비 및 소프트웨어 비용
          description:
            '인공지능 기술을 활용한 인터랙티브 설치 작품을 제작합니다. 관객의 움직임과 감정을 AI가 실시간으로 분석하여 시각적, 청각적 반응을 생성하는 몰입형 경험을 만들어갑니다.',
          referenceUrl: '/3.jpg',
          status: 'IN_PROGRESS', // 이미 진행 중인 프로젝트
          createdAt: '2025-07-15T11:45:00Z',
          updatedAt: '2025-08-24T13:30:00Z',
        },

        {
          id: 4,
          creatorId: 1004,
          creatorName: '최현우',
          title: '전통 무용과 현대 무용의 만남',
          projectType: 'PERFORMANCE', // 공연 프로젝트
          requirements:
            '전통무용 또는 현대무용 경험자, 무대 경험 3년 이상, 창작에 대한 열정이 있는 무용수를 찾습니다.',
          primaryArtField: 'DANCE', // 주 분야: 무용
          secondaryArtField: 'TRADITIONAL_ARTS', // 부 분야: 전통예술
          recruitmentCount: 12,
          startDate: '2025-11-20',
          activityCity: 'DAEGU',
          expectedBudget: 6500000, // 650만원 - 의상, 무대, 연습실 비용
          description:
            '한국 전통 무용의 정신과 움직임을 현대적으로 재해석한 창작 무용 공연을 준비합니다. 궁중무용과 민속무용의 요소를 현대 무용의 표현 기법과 융합하여 새로운 한국 무용의 가능성을 탐구합니다.',
          referenceUrl: '/4.jpg',
          status: 'RECRUITING',
          createdAt: '2025-08-22T08:20:00Z',
          updatedAt: '2025-08-24T10:15:00Z',
        },

        {
          id: 5,
          creatorId: 1005,
          creatorName: '정수아',
          title: '지역 작가들과 함께하는 출판 프로젝트',
          projectType: 'COLLABORATION', // 협업 프로젝트
          requirements:
            '글쓰기 경험, 편집 또는 디자인 능력, 지역 문화에 대한 관심을 가진 분들을 모집합니다.',
          primaryArtField: 'LITERATURE', // 주 분야: 문학
          secondaryArtField: 'DESIGN', // 부 분야: 디자인 (출판 디자인)
          recruitmentCount: 6,
          startDate: '2025-09-30',
          activityCity: 'GWANGJU',
          expectedBudget: 3000000, // 300만원 - 인쇄비 및 제작비
          description:
            "광주 지역의 젊은 작가들과 함께 문학 잡지 '광주 이야기'를 창간합니다. 지역의 독특한 문화와 사람들의 이야기를 발굴하여 문학적으로 형상화하고, 아름다운 편집 디자인으로 완성하는 프로젝트입니다.",
          referenceUrl: '/1.jpg', // 아직 참조 URL이 없는 경우의 예시
          status: 'RECRUITING',
          createdAt: '2025-08-19T14:30:00Z',
          updatedAt: '2025-08-24T09:45:00Z',
        },

        {
          id: 6,
          creatorId: 1006,
          creatorName: '강예진',
          title: '기업 브랜딩을 위한 상업 사진 촬영',
          projectType: 'COMMERCIAL', // 상업적 프로젝트
          requirements:
            '상업 사진 촬영 경험, 브랜드 이해도, 포토샵/라이트룸 능숙자를 찾습니다. 포트폴리오 필수 제출입니다.',
          primaryArtField: 'PHOTOGRAPHY', // 주 분야: 사진
          secondaryArtField: 'DESIGN', // 부 분야: 디자인 (브랜딩)
          recruitmentCount: 3, // 전문가 소규모 팀
          startDate: '2025-09-05',
          activityCity: 'INCHEON',
          expectedBudget: 15000000, // 1500만원 - 높은 상업적 예산
          description:
            '인천 송도 신도시의 스타트업 기업들을 위한 브랜딩 사진 촬영 프로젝트입니다. 기업의 정체성과 가치를 시각적으로 표현하는 고품질의 상업 사진을 제작하여 브랜드 이미지 구축에 기여합니다.',
          referenceUrl: '/2.jpg',
          status: 'COMPLETED', // 이미 완료된 프로젝트 예시
          createdAt: '2025-07-10T16:00:00Z',
          updatedAt: '2025-08-15T18:30:00Z',
        },

        {
          id: 7,
          creatorId: 1007,
          creatorName: '윤서현',
          title: '청소년 예술 교육 워크숍',
          projectType: 'EDUCATIONAL', // 교육 프로젝트
          requirements:
            '아동/청소년 교육 경험, 예술 전공자 우대, 인내심과 소통 능력을 갖춘 분을 찾습니다.',
          primaryArtField: 'CRAFT', // 주 분야: 공예
          secondaryArtField: 'VISUAL_ARTS', // 부 분야: 시각예술
          recruitmentCount: 10,
          startDate: '2025-10-01',
          activityCity: 'DAEJEON',
          expectedBudget: 4000000, // 400만원 - 교육용 재료비 및 강사료
          description:
            '대전 지역 중고등학생들을 대상으로 한 6주간의 예술 교육 워크숍입니다. 도자기, 목공예, 섬유 공예 등 다양한 전통 공예 기법을 현대적으로 재해석하여 청소년들의 창의성을 기르는 프로그램입니다.',
          referenceUrl: '/1.jpg',
          status: 'RECRUITING',
          createdAt: '2025-08-21T12:00:00Z',
          updatedAt: '2025-08-24T15:20:00Z',
        },

        {
          id: 8,
          creatorId: 1008,
          creatorName: '홍길동',
          title: '제주 자연 속 설치 미술 프로젝트',
          projectType: 'INSTALLATION', // 설치미술 프로젝트
          requirements:
            '야외 작업 가능자, 자연 친화적 재료 사용 경험, 환경 예술에 대한 이해가 있는 분을 찾습니다.',
          primaryArtField: 'VISUAL_ARTS', // 주 분야: 시각예술
          secondaryArtField: 'ARCHITECTURE', // 부 분야: 건축 (공간 설계)
          recruitmentCount: 7,
          startDate: '2025-11-01',
          activityCity: 'JEJU',
          expectedBudget: 10000000, // 1000만원 - 재료비, 운송비, 설치비
          description:
            '제주의 아름다운 자연 환경 속에서 자연과 조화를 이루는 대형 설치 작품을 제작합니다. 지속가능한 재료만을 사용하여 환경을 해치지 않으면서도 강력한 메시지를 전달하는 작품을 목표로 합니다.',
          referenceUrl: '/3.jpg',
          status: 'PAUSED', // 일시 중단된 프로젝트 예시
          createdAt: '2025-08-01T10:15:00Z',
          updatedAt: '2025-08-20T11:30:00Z',
        },

        {
          id: 9,
          creatorId: 1009,
          creatorName: '김태영',
          title: '독립 영화 제작 프로젝트',
          projectType: 'COLLABORATION', // 영화 프로젝트로 추정 (타입에 없지만 내용상 COLLABORATION으로 분류)
          requirements:
            '영화 제작 경험, 촬영/편집/사운드 중 한 분야 전문성, 장기 프로젝트 참여 가능자를 찾습니다.',
          primaryArtField: 'FILM', // 주 분야: 영화
          secondaryArtField: 'MULTIMEDIA', // 부 분야: 멀티미디어
          recruitmentCount: 20, // 영화 제작팀의 다양한 역할
          startDate: '2025-10-15',
          activityCity: 'GYEONGGI',
          expectedBudget: 25000000, // 2500만원 - 독립영화치고는 큰 예산
          description:
            '경기도의 소도시를 배경으로 한 독립 영화를 제작합니다. 청춘의 꿈과 현실, 그리고 지역사회의 변화를 다룬 따뜻하면서도 현실적인 이야기를 통해 관객들에게 진솔한 감동을 전하는 것이 목표입니다.',
          referenceUrl: '/4.jpg',
          status: 'RECRUITING',
          createdAt: '2025-08-23T13:45:00Z',
          updatedAt: '2025-08-24T17:10:00Z',
        },

        {
          id: 10,
          creatorId: 1010,
          creatorName: '이소민',
          title: '패션 디자이너 데뷔 컬렉션',
          projectType: 'EXHIBITION', // 전시 형태의 패션쇼
          requirements:
            '패션 디자인 학도, 패턴 제작자, 모델, 헤어/메이크업 아티스트를 찾습니다. 패션에 대한 열정이 가장 중요합니다.',
          primaryArtField: 'FASHION', // 주 분야: 패션
          secondaryArtField: 'DESIGN', // 부 분야: 디자인
          recruitmentCount: 25, // 패션쇼 제작진
          startDate: '2025-12-01',
          activityCity: 'SEOUL',
          expectedBudget: 18000000, // 1800만원 - 원단, 제작, 쇼 진행비
          description:
            "신진 패션 디자이너의 데뷔 컬렉션을 위한 종합 프로젝트입니다. '도시 속의 자연'이라는 테마로 지속가능한 패션을 추구하며, 친환경 소재와 제로 웨이스트 디자인을 통해 새로운 패션의 방향을 제시합니다.",
          referenceUrl: '/1.jpg',
          status: 'CANCELLED', // 취소된 프로젝트 예시
          createdAt: '2025-07-20T09:30:00Z',
          updatedAt: '2025-08-10T14:45:00Z',
        },
      ])
      router.push('/matching/project/result')
    }
  }, [isSuccess, router, data, setResult])

  const onProcess = useCallback((responses: SelectOption[]) => {
    setCurrentResponses(responses.map(item => item.value))
  }, [])

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

  return (
    <>
      <Flex gap={24} className='w-full' align='center'>
        <ProgressBar value={percentage} className='h-[22px]' />
        <p className='body1'>{percentage}%</p>
      </Flex>
      {isMatching ? (
        <LoadingMatching />
      ) : (
        <Chat responses={responses} onProcess={onProcess} />
      )}
      {modalCtx}
    </>
  )
}
