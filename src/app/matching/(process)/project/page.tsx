'use client'
import { useModal } from '@/components/shadcn/modal'
import { ProgressBar } from '@/components/ProgressBar'
import { SelectListModal } from '@/components/modal/SelectListModal'
import {
  BUDGET_RANGES,
  CITIES,
  PROJECT_DURATION,
  PROJECT_TYPES,
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
                    className='h-[230px]'
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
    ],
    []
  )

  const percentage =
    (currentResponses.length /
      responses.filter(item => !isNil(item.buttonProps)).length) *
    100

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
