'use client'

import { useGetPetById } from '@/apis/pets/usePetService'

export const PetName = () => {
  const { data } = useGetPetById({ petId: 4 })

  return <>{data?.data.name}</>
}
