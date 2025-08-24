'use client'

import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ResponseProps, Response } from './Response'
import { Request } from './Request'
import { Flex } from '../flex'
import { Fragment, memo, useCallback, useEffect, useState } from 'react'
import { compact, get, set } from 'lodash-es'

export interface ChatProps {
  responses: ResponseProps[]
  onProcess: (responses: SelectOption[]) => void
}

export const Chat = memo(({ responses, onProcess }: ChatProps) => {
  const [allResponses, setAllResponses] = useState<
    (SelectOption | undefined)[]
  >([])

  const process = useCallback(
    (props?: SelectOption) => {
      setAllResponses(prev => {
        return [...prev, props]
      })
      onProcess?.(compact([...allResponses, props]))
    },
    [allResponses, onProcess]
  )

  const edit = useCallback(
    (index: number, props?: SelectOption) => {
      const newAllResponses = set(allResponses, index, props)
      setAllResponses(newAllResponses)
      onProcess?.(compact(newAllResponses))
    },
    [allResponses, onProcess]
  )

  useEffect(() => {
    if (responses.length === allResponses.length) {
      return
    }

    const currentStep = allResponses.length

    if (!get(responses, [currentStep, 'buttonProps'])) {
      process(undefined)
    }
  }, [allResponses, process])

  return (
    <ScrollArea className='min-h-[100px] w-full'>
      <Flex vertical gap={10}>
        {responses
          .slice(0, allResponses.length + 1)
          .map((response, index, arr) => {
            return (
              <Fragment key={index}>
                <Response
                  {...response}
                  {...(response.buttonProps
                    ? {
                        buttonProps: {
                          ...response.buttonProps,
                          onClick: async () => {
                            const res = await response.buttonProps?.onClick()
                            process(res)
                            return res
                          },
                          disabled: arr.length - 1 != index,
                        },
                      }
                    : {})}
                />

                {allResponses[index] && (
                  <Request
                    text={allResponses[index].label}
                    className='self-end'
                    onClickEdit={async () => {
                      const res = await response.buttonProps?.onClick()
                      edit(index, res)
                    }}
                  />
                )}
              </Fragment>
            )
          })}
      </Flex>
    </ScrollArea>
  )
})

Chat.displayName = 'Chat'
