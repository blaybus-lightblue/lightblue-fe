import styles from './page.module.css'
import queryOptions from '@/apis/pets/queries'
import { getDehydratedQuery } from '@/apis/utils/getDehydratedQuery'
import { PetName } from '@/components/PetName'
import { HydrationBoundary } from '@tanstack/react-query'

export default async function Home() {
  const { queryKey, queryFn } = queryOptions.getPetById(4)
  const query = await getDehydratedQuery({ queryKey, queryFn })

  return (
    <div className={styles.page}>
      <HydrationBoundary state={query}>
        <PetName />
      </HydrationBoundary>
    </div>
  )
}
