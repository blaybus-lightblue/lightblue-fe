import { IModalCustomConfig } from '../types'

export const Custom = (props: IModalCustomConfig) => (
  <div>
    <props.component />
  </div>
)
