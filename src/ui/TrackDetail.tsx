import { useEffect, useState } from 'react'
import { api } from '../api/api.ts'
import type { TrackDetailsResource } from '../api/types.ts'

type PropsType = {
  trackId: string | null
}

export const useTrackDetail = ({ trackId }: PropsType) => {
  const [trackDetails, setTrackDetails] = useState<TrackDetailsResource>()

  useEffect(() => {
    if (!trackId) {
      return
    }
    api.getTrack(trackId).then((res) => {
      setTrackDetails(res.data.data)
    })
  }, [trackId])

  return { trackDetails: trackDetails }
}

export const TrackDetail = (trackId: PropsType) => {
  const { trackDetails } = useTrackDetail(trackId)

  return (
    <div>
      <h3>Details</h3>
      {!trackDetails && 'Track is not selected'}
      {trackDetails && <span>{trackDetails.attributes.title}</span>}
    </div>
  )
}
