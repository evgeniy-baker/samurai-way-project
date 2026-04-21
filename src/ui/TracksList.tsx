import { TrackItem } from './TrackItem.tsx'
import { useTracks } from '../bll/useTracks.ts'

type PropsType = {
  onTrackSelected: (trackId: string | null) => void
  trackSelected: string | null
}

export const TracksList = ({ trackSelected, onTrackSelected }: PropsType) => {
  const { tracks, refresh } = useTracks() // Кастомный хук получения треков

  if (tracks === null) {
    return (
      <div>
        <span> Loading... </span>
      </div>
    )
  }

  const onClickHandler = () => {
    refresh()
  }

  return (
    <div>
      <button onClick={onClickHandler}>Refresh</button>
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
    </div>
  )
}
