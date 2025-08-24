import { Flex } from '../flex'
import { Spinner } from '../shadcn/spinner'

export const LoadingMatching = () => {
  return (
    <Flex align='center' justify='center' vertical className='absolute inset-0'>
      <Flex align='center' justify='center' vertical gap={24}>
        <Spinner />
        <h1 className='title1'>매칭 중입니다.</h1>
      </Flex>
    </Flex>
  )
}
