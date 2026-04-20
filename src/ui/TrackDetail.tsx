import { useEffect, useState } from 'react'
import { api } from '../api/api.ts'
import type { TrackDetailsResource } from '../api/types.ts'

type PropsType = {
  trackId: string | null
}

export const TrackDetail = ({ trackId }: PropsType) => {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource>()

  useEffect(() => {
    if (!trackId) {
      return
    }
    api.getTrack(trackId).then((res) => {
      setSelectedTrack(res.data.data)
    })
  }, [trackId])

  return (
    <div>
      <h3>Details</h3>
      {!selectedTrack && 'Track is not selected'}
      {selectedTrack && <span>{selectedTrack.attributes.title}</span>}
    </div>
  )
}
