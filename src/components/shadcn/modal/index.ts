import { destroyFuncs } from './destroyFuncs'

export { FOCUSABLE_SELECTOR } from './components/Content'
export { ModalProvider } from './components/Provider'
export { useModal } from './hooks/useModal'
export { useModalControl } from './hooks/useModalControl'
export type * from './types'

export const destroyAll = () => {
  while (destroyFuncs.length) {
    const close = destroyFuncs.pop()

    if (close) {
      close()
    }
  }
}
