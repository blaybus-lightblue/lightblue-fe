/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, uniqueId } from 'lodash-es'
import {
  forwardRef,
  memo,
  ReactElement,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

import { Custom } from '../components/Custom'
import { Wrapper } from '../components/Wrapper'
import { destroyFuncs } from '../destroyFuncs'
import {
  IModalAlertConfig,
  IModalConfirmConfig,
  IModalCustomConfig,
  IModalInstance,
  IModalResult,
} from '../types'
import { usePatchElement } from './usePatchElement'

let uuid = 0

export const useModal = () => {
  const holderRef = useRef<IContextHolderRef>(null)

  const renderModal = useCallback(
    <T = any,>(
      config:
        | (IModalAlertConfig & { type: 'alert' })
        | (IModalConfirmConfig & { type: 'confirm' })
        | (IModalCustomConfig & { type: 'custom' })
    ) => {
      if (!holderRef.current) {
        throw new Error('Need render context holder')
      }

      return new Promise<IModalResult<T>>(resolve => {
        let modal: ReactElement | null = null

        const key = `modal-${++uuid}`

        switch (config.type) {
          case 'custom':
            modal = (
              <Wrapper
                key={key}
                resolve={resolve}
                {...{ size: get(config, ['component', 'size']), ...config }}>
                <Custom {...config} />
              </Wrapper>
            )
            break
          default:
            throw new Error('not supported type')
        }

        const detachFn = holderRef.current?.patchElement(modal)

        if (detachFn) {
          destroyFuncs.push(() => {
            resolve({ closedBy: 'destroyAll', value: undefined })
            detachFn()
          })
        }
      })
    },
    []
  )

  const fns = useMemo<IModalInstance>(
    () => ({
      alert: (config: IModalAlertConfig) =>
        renderModal<true>({ size: 380, ...config, type: 'alert' }),
      confirm: (config: IModalConfirmConfig) =>
        renderModal<boolean>({ size: 380, ...config, type: 'confirm' }),
      open: <T = any,>(config: IModalCustomConfig) =>
        renderModal<T>({ ...config, type: 'custom' }),
    }),
    [renderModal]
  )

  return useMemo(
    () =>
      [
        fns,
        <ContextHolder key={uniqueId('modal-holder-')} ref={holderRef} />,
      ] as const,
    [fns]
  )
}

interface IContextHolderRef {
  patchElement: ReturnType<typeof usePatchElement>[1]
}

const ContextHolder = memo(
  forwardRef<IContextHolderRef>((_props, ref) => {
    const [elements, patchElement] = usePatchElement()

    useImperativeHandle(ref, () => ({ patchElement }), [patchElement])

    return elements
  })
)
