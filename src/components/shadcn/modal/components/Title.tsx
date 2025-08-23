import { defaults } from 'lodash-es'
import { useMemo } from 'react'

import { useModalContext } from '../contexts/modal'
import { IModalBaseConfig } from '../types'

export const Title = ({
  title,
  ...props
}: IModalBaseConfig & { noPadding?: boolean }) => {
  const config = useModalContext()

  const { showCloseButton } = useMemo(
    () => defaults({}, props, config),
    [props, config]
  )

  return (
    <div className='flex justify-between text-balance p-[20px]'>{title}</div>
  )
}
