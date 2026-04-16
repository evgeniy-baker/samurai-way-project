import { useEffect, useState } from 'react'
import { tracksApi } from '../api/tracksApi.ts'

export const TracksList = () => {
  useEffect(() => {
    tracksApi.getTracks().then((res) => setTracks(res.data.data))
  }, [])

  const [tracks, setTracks] = useState([])
  const [selectedTrackId, setSelectedTrackId] = useState(null)

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
        <li
          key={track.id}
          style={{
            border: selectedTrackId === track.id ? '1px solid orange' : '',
          }}
        >
          <div
            onClick={() => {
              setSelectedTrackId(track.id)
            }}
          >
            {track.attributes.title}
          </div>
          <audio src={track.attributes.attachments[0].url} controls={true}></audio>
        </li>
      ))}
    </ul>
  )
}
