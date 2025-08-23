import { createContext, useContext } from 'react'

import { type IModalBaseConfig } from '../types'

export const ModalContext = createContext<Pick<
  IModalBaseConfig,
  | 'noAutoFocus'
  | 'closeOnEscape'
  | 'showCloseButton'
  | 'closeOnDimmedClick'
  | 'closeIcon'
> | void>(undefined)

export const useModalContext = () => useContext(ModalContext)
