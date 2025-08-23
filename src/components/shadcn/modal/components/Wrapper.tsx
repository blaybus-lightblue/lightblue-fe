import Portal from '@rc-component/portal'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react'

import { BeforeCloseFn, IModalBaseConfig, IModalResult } from '../types'
import { Content } from './Content'
import { Dimmed } from './Dimmed'

const getContainer = () => document.body

type CloseResult =
  | IModalResult
  | ((close: (result: IModalResult) => unknown) => Promise<unknown>)

interface IWrapperProps extends IModalBaseConfig {
  resolve: (result: IModalResult) => void
}

export const Wrapper = (props: PropsWithChildren<IWrapperProps>) => {
  const [open, setOpen] = useState(true)
  const [beforeClose, setBeforeClose] = useState<BeforeCloseFn | null>(
    props.beforeClose ?? null
  )
  // close의 인자에 함수가 들어오기 되면 resolve 되기 전까지 모달이 닫히지 않기 위한 로딩 처리를 위한 변수
  const [loading, setLoading] = useState(false)
  const { resolve, afterClose } = props

  const close = useCallback(
    async (result: CloseResult) => {
      if (loading) {
        return
      }

      let resolveValue: IModalResult

      if (typeof result === 'function') {
        resolveValue = await new Promise(resolve => {
          setLoading(true)

          return result(resolve).finally(() => setLoading(false))
        })
      } else {
        resolveValue = result
      }

      if ((await Promise.resolve(beforeClose?.(resolveValue))) === false) {
        return
      }

      setOpen(false)
      resolve(resolveValue)

      afterClose?.(resolveValue)
    },
    [loading, beforeClose, resolve, afterClose]
  )

  const contextValue = useMemo(
    () => ({ close, setBeforeClose }),
    [close, setBeforeClose]
  )

  if (!open) {
    return null
  }

  return (
    <Portal
      open={open}
      autoLock={open}
      autoDestroy={false}
      getContainer={getContainer}>
      {props.noDimmed ? null : <Dimmed />}
      <WrapperContext.Provider value={contextValue}>
        <Content {...props}>{props.children}</Content>
      </WrapperContext.Provider>
    </Portal>
  )
}

export const WrapperContext = createContext<{
  close: (result: CloseResult) => void
  setBeforeClose: (fn: BeforeCloseFn) => void
} | null>(null)
