import { useEffect, useState } from 'react'
import { tracksApi } from '../api/tracksApi.ts'
import { TrackItem } from './TrackItem.tsx'
import type { TrackType } from '../api/types.ts'

type PropsType = {
  onTrackSelected: (trackId: string | null) => void
  trackSelected: string | null
}

export const TracksList = ({ trackSelected, onTrackSelected }: PropsType) => {
  useEffect(() => {
    tracksApi.getTracks().then((res) => setTracks(res.data.data)) // Получаем и сетаем загруженные треки
  }, [])

  const [tracks, setTracks] = useState<TrackType[]>([])

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
