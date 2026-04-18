import { useState } from 'react'
import './App.css'
import { TracksList } from './components/TracksList.tsx'
import { TrackDetail } from './components/TrackDetail.tsx'

function App() {
  const [trackId, setTrackId] = useState('')

  return (
    <div style={{ display: 'flex' }}>
      <TracksList onTrackSelected={setTrackId} trackSelected={trackId} />
      <TrackDetail trackId={trackId} />
    </div>
  )
}

export default App
