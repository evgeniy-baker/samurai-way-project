import { useEffect, useState } from 'react'
import { api } from '../api/api.ts'
import { TrackItem } from './TrackItem.tsx'
import type { TrackListItemResource } from '../api/types.ts'

type PropsType = {
  onTrackSelected: (trackId: string | null) => void
  trackSelected: string | null
}

export const TracksList = ({ trackSelected, onTrackSelected }: PropsType) => {
  useEffect(() => {
    api.getTracks().then((res) => {
      setTracks(res.data.data)
    }) // Получаем и сетаем загруженные треки
  }, [])

  const [tracks, setTracks] = useState<TrackListItemResource[]>([])

  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
  if (tracks.length === 0 || null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <ul>
      {tracks.map((track) => (
        <TrackItem
          key={track.id}
          track={track}
          isSelected={track.id === trackSelected}
          onTrackSelected={onTrackSelected}
        />
      ))}
    </ul>
  )
}
