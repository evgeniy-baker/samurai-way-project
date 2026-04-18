import { useEffect, useState } from 'react'
import { tracksApi } from '../api/tracksApi.ts'
import { TrackItem } from './TrackItem.tsx'

type PropsType = {
  onTrackSelected: (trackId: string) => void
  trackSelected: string
}

export const TracksList = ({ trackSelected, onTrackSelected }: PropsType) => {
  useEffect(() => {
    tracksApi.getTracks().then((res) => setTracks(res.data.data)) // Получаем и сетаем загруженные треки
  }, [])

  const [tracks, setTracks] = useState([])

  if (tracks === null) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }
  if (tracks.length === 0) {
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
