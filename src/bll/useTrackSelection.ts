import { useState } from 'react'

export const useTrackSelection = () => {
  const [trackId, setTrackId] = useState<string | null>('')
  return {
    trackId,
    setTrackId,
  }
}
