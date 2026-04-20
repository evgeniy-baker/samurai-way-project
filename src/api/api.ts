import { instance } from './instance.ts'
import type { GetTrackDetailsOutput, GetTrackListOutput } from './types.ts'

export const api = {
  getTracks() {
    return instance.get<GetTrackListOutput>(`/playlists/tracks`)
  },
  getTrack(trackId: string) {
    return instance.get<GetTrackDetailsOutput>(`/playlists/tracks/${trackId}`)
  },
}
