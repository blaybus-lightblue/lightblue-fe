/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentProps, FC, ReactNode } from 'react'

import { Button } from '@/components/shadcn/button'

export type ModalSize = string | number

export type BeforeCloseFn = (result: IModalResult) => any | Promise<any>

export interface IModalBaseConfig {
  title?: ReactNode
  size?: ModalSize
  danger?: boolean
  noDimmed?: boolean
  noAutoFocus?: boolean
  closeOnEscape?: boolean
  showCloseButton?: boolean
  closeOnDimmedClick?: boolean
  beforeClose?: BeforeCloseFn
  afterClose?: (result: IModalResult) => any
  closeIcon?: ReactNode
}

export interface IModalAlertConfig extends IModalBaseConfig {
  icon?: ReactNode
  content?: ReactNode
  btnText?: ReactNode
  btnProps?: ComponentProps<typeof Button>
}

export interface IModalConfirmConfig extends IModalBaseConfig {
  icon?: ReactNode
  content?: ReactNode
  cancelText?: ReactNode
  okText?: ReactNode
}

export interface IModalCustomConfig extends Omit<IModalBaseConfig, 'title'> {
  component: FC
  noHeaderAdjustment?: boolean
}

export type ModalClosedBy =
  | 'button'
  | 'closeButton'
  | 'dimmed'
  | 'escape'
  | 'destroyAll'

export interface IModalResult<TValue = any> {
  value?: TValue
  closedBy: ModalClosedBy
}

export interface IModalInstance {
  // alert: (config: IModalAlertConfig) => Promise<IModalResult<true>>
  // confirm: (config: IModalConfirmConfig) => Promise<IModalResult<boolean>>
  open: <T = any>(config: IModalCustomConfig) => Promise<IModalResult<T>>
}
