import { instance } from './instance.ts'
import type { ResponseType } from './types.ts'

export const tracksApi = {
  getTracks() {
    return instance.get<ResponseType>(`/playlists/tracks`)
  },
  getTrack(trackId: string) {
    return instance.get<ResponseType>(`/playlists/tracks/${trackId}`)
  },
}
