import { useQuery } from '@tanstack/react-query'

import queryOptions from '@/apis/pets/queries'

export function useGetPetById({ petId }: { petId: number }) {
  return useQuery(queryOptions.getPetById(petId))
}
