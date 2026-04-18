import { useEffect, useState } from 'react'
import { tracksApi } from '../api/tracksApi.ts'

type PropsType = {
  trackId: string | null
}

export const TrackDetail = ({ trackId }: PropsType) => {
  const [selectedTrack, setSelectedTrack] = useState(trackId)

  useEffect(() => {
    if (!trackId) {
      return
    }
    tracksApi.getTrack(trackId).then((res) => setSelectedTrack(res.data.data))
  }, [trackId])

  return (
    <div>
      <h3>Details</h3>
      {!selectedTrack && 'Track is not selected'}
      {selectedTrack && <span>{selectedTrack.attributes.title}</span>}
    </div>
  )
}
