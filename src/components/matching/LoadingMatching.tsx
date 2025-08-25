// import { Flex } from '../flex'
// import { Spinner } from '../shadcn/spinner'

// export const LoadingMatching = () => {
//   return (
//     <Flex align='center' justify='center' vertical className='absolute inset-0'>
//       <Flex align='center' justify='center' vertical gap={24}>
//         <Spinner />
//         <h1 className='title1'>매칭 중입니다.</h1>
//       </Flex>
//     </Flex>
//   )
// }

import { Flex } from '../flex'
import { Spinner } from '../shadcn/spinner'

export const LoadingMatching = () => {
  return (
    <div className='flex items-center justify-center min-h-[400px] w-full'>
      <div className='text-center'>
        <div className='mb-6'>
          <Spinner className='w-12 h-12 text-blue-500' />
        </div>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>
          매칭 중입니다
        </h2>
        <p className='text-gray-600'>최적의 예술가를 찾고 있어요</p>
        <div className='mt-4 flex justify-center space-x-1'>
          <div className='w-2 h-2 bg-blue-400 rounded-full animate-bounce'></div>
          <div
            className='w-2 h-2 bg-blue-400 rounded-full animate-bounce'
            style={{ animationDelay: '0.1s' }}></div>
          <div
            className='w-2 h-2 bg-blue-400 rounded-full animate-bounce'
            style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  )
}
