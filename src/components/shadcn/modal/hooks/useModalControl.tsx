import { useContext } from 'react'

import { WrapperContext } from '../components/Wrapper'

export const useModalControl = () => {
  const ctx = useContext(WrapperContext)

  if (!ctx) {
    throw new Error('No WrapperContext')
  }

  return ctx
}
