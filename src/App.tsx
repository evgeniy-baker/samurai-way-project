import { useState } from 'react'
import './App.css'
import { TracksList } from './ui/TracksList.tsx'
import { TrackDetail } from './ui/TrackDetail.tsx'

function App() {
  const [trackId, setTrackId] = useState<string | null>('')

  return (
    <div style={{ display: 'flex' }}>
      <TracksList onTrackSelected={setTrackId} trackSelected={trackId} />
      <TrackDetail trackId={trackId} />
    </div>
  )
}

export default App
