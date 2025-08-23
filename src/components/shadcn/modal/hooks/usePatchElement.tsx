/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useCallback, useState } from 'react'

export const usePatchElement = (): [
  ReactElement[],
  (element: ReactElement) => () => any,
] => {
  const [elements, setElements] = useState<React.ReactElement[]>([])

  const patchElement = useCallback((element: React.ReactElement) => {
    setElements(originElements => [...originElements, element])

    return () => {
      setElements(originElements =>
        originElements.filter(ele => ele !== element)
      )
    }
  }, [])

  return [elements, patchElement]
}
