import type { TrackListItemResource } from '../api/types.ts'

type PropsType = {
  track: TrackListItemResource
  onTrackSelected: (trackId: string) => void
  isSelected: boolean
}

export const TrackItem = ({ track, onTrackSelected, isSelected }: PropsType) => {
  const onClickHandler = (trackId: string) => {
    onTrackSelected?.(trackId)
  }

  return (
    <li
      key={track.id}
      style={{
        border: isSelected ? '1px solid orange' : '',
      }}
    >
      <div onClick={() => onClickHandler(track.id)}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls={true}></audio>
    </li>
  )
}
