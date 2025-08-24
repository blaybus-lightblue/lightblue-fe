'use client'
import { useModal } from '@/components/shadcn/modal'
import { ProgressBar } from '@/components/ProgressBar'
import { SelectListModal } from '@/components/modal/SelectListModal'
import {
  CITIES,
  PORTFOLIO_EXISTENCE,
  PROJECT_DURATION,
  PROJECT_TYPES,
  YEARS_OF_CARRIER,
} from '@/consts'
import { ResponseProps } from '@/components/chat/Response'
import { useMemo, useState } from 'react'
import { Flex } from '@/components/flex'
import { Chat } from '@/components/chat/Chat'
import { isEqual, isNil } from 'lodash-es'

export default function Page() {
  const [modal, modalCtx] = useModal()
  const [currentResponses, setCurrentResponses] = useState<
    SelectOption['value'][]
  >([])

  const responses: ResponseProps[] = useMemo(
    () => [
      {
        text: '필터링할 정보를 알려주시면 3개 이상의 프로젝트와 예술가가 매칭되요',
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
    []
  )

  const percentage = Math.round(
    (currentResponses.length /
      responses.filter(item => !isNil(item.buttonProps)).length) *
      100
  )

  return (
    <>
      <Flex gap={24} className='w-full' align='center'>
        <ProgressBar value={percentage} className='h-[22px]' />
        <p className='body1'>{percentage}%</p>
      </Flex>
      <Chat
        responses={responses}
        onProcess={responses => {
          setCurrentResponses(responses.map(item => item.value))
        }}></Chat>
      {modalCtx}
    </>
  )
}
