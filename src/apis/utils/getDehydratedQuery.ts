// @REF: https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#alternative-use-a-single-queryclient-for-prefetching
import { QueryClient, dehydrate, QueryKey } from '@tanstack/react-query'

import { cache } from 'react'

export const getQueryClient = cache(() => new QueryClient())

interface QueryProps<ResponseType = unknown> {
  queryKey: QueryKey

  queryFn: () => Promise<ResponseType>
}

export async function getDehydratedQuery<Q extends QueryProps>({
  queryKey,
  queryFn,
}: Q) {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({ queryKey, queryFn })

  return dehydrate(queryClient)
}
