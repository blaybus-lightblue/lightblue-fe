'use client'

import { useGetPetById } from '@/apis/pets/usePetService'
import { useCounterStore } from '@/providers/CounterStoreProvider'

export const PetName = () => {
  const { data } = useGetPetById({ petId: 4 })
  const { count, incrementCount, decrementCount } = useCounterStore(
    state => state
  )

  return (
    <>
      {data?.data.name}
      Count: {count}
      <hr />
      <button type='button' onClick={incrementCount}>
        Increment Count
      </button>
      <button type='button' onClick={decrementCount}>
        Decrement Count
      </button>
    </>
  )
}
