import { ReactNode } from 'react'

import { ModalContext } from '../contexts/modal'
import { IModalBaseConfig } from '../types'

export const ModalProvider = ({
  config,
  children,
}: { config?: IModalBaseConfig } & { children: ReactNode }) => (
  <ModalContext.Provider value={config}>{children}</ModalContext.Provider>
)
