import './App.css'
import { TracksList } from './ui/TracksList.tsx'
import { TrackDetail } from './ui/TrackDetail.tsx'
import { useTrackSelection } from './bll/useTrackSelection.ts'

function App() {
  const { trackId, setTrackId } = useTrackSelection()

  return (
    <div style={{ display: 'flex' }}>
      <TracksList onTrackSelected={setTrackId} trackSelected={trackId} />
      <TrackDetail trackId={trackId} />
    </div>
  )
}

export default App
