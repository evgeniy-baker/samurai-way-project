import { useEffect, useState } from 'react'
import './App.css'
import { tracksApi } from './api/tracksApi.ts'

function App() {
  const [tracks, setTracks] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState(null)

  useEffect(() => {
    tracksApi.getTracks().then((res) => setTracks(res.data.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) {
      return
    }
    tracksApi.getTrack(selectedTrackId).then((res) => setSelectedTrack(res.data.data))
  }, [selectedTrackId])

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>Loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun</h1>
        <span>Loading...</span>
      </div>
    )
  }

  // const onClickHandler = (trackId: string) => {
  //   setSelectedTrackId(trackId)
  //   tracksApi.getTrack(trackId).then((res) => setSelectedTrack(res.data.data))
  // }

  return (
    <div>
      <h1>Musicfun</h1>
      <div style={{ display: 'flex' }}>
        <ul>
          {tracks.map((track) => (
            <li
              key={track.id}
              style={{
                border: selectedTrack?.id === track.id ? '1px solid orange' : '',
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

        <h3>
          Details
          {!selectedTrack && 'Track is not selected'}
          {selectedTrack && <h3>{selectedTrack.attributes.title}</h3>}
        </h3>
      </div>
    </div>
  )
}

export default App
