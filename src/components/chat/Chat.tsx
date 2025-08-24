import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ResponseProps, Response } from './Response'
import { Request } from './Request'
import { Flex } from '../flex'
import { Fragment, memo, useEffect, useState } from 'react'
import { compact, get } from 'lodash-es'

export interface ChatProps {
  responses: ResponseProps[]
  onProcess: (responses: SelectOption[]) => void
}

export const Chat = memo(({ responses, onProcess }: ChatProps) => {
  const [allResponses, setAllResponses] = useState<
    (SelectOption | undefined)[]
  >([])

  const process = (props?: SelectOption) => {
    setAllResponses(prev => {
      return [...prev, props]
    })
    onProcess(compact([...allResponses, props]))
  }

  useEffect(() => {
    if (responses.length === allResponses.length) {
      return
    }
    const currentStep = allResponses.length

    if (!get(responses, [currentStep, 'buttonProps'])) {
      process(undefined)
    }
  }, [allResponses])

  return (
    <ScrollArea className='min-h-[100px] w-full'>
      <Flex vertical gap={10}>
        {responses.slice(0, allResponses.length + 1).map((response, index) => {
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
                      },
                    }
                  : {})}
              />

              {allResponses[index] && (
                <Request
                  text={allResponses[index].label}
                  className='self-end'
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
