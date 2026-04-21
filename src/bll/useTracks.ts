import { useEffect, useState } from 'react'
import { api } from '../api/api.ts'
import type { TrackListItemResource } from '../api/types.ts'

export const useTracks = () => {
  useEffect(() => {
    api.getTracks().then((res) => {
      setTracks(res.data.data)
    }) // Получаем и сетаем загруженные треки
  }, [])

  const [tracks, setTracks] = useState<TrackListItemResource[] | null>([])

  return {
    tracks: tracks,
    refresh: () => {
      setTracks(null)
      api.getTracks().then((res) => {
        setTracks(res.data.data)
      })
    },
  }
}
