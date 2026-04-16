import { useEffect, useState } from 'react'
import { tracksApi } from '../api/tracksApi.ts'

type PropsType = {
  selectedTrackId: string | null
}

export const TrackDetail = ({ selectedTrackId }: PropsType) => {
  const [selectedTrack, setSelectedTrack] = useState(null)

  useEffect(() => {
    if (!selectedTrackId) {
      return
    }
    tracksApi.getTrack(selectedTrackId).then((res) => setSelectedTrack(res.data.data))
  }, [selectedTrackId])

  return (
    <h3>
      Details
      {!selectedTrack && 'Track is not selected'}
      {selectedTrack && <h3>{selectedTrack.attributes.title}</h3>}
    </h3>
  )
}
