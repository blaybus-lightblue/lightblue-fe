import { PropsWithChildren } from 'react'

export const Dimmed = ({ children }: PropsWithChildren) => (
  <div className='fixed inset-0 z-[5000] bg-[rgba(0, 0, 0, 0.2)]'>
    {children}
  </div>
)
