import { instance } from './instance.ts'

export const tracksApi = {
  getTracks() {
    return instance.get(`/playlists/tracks`)
  },
  getTrack(trackId: string) {
    return instance.get(`/playlists/tracks/${trackId}`)
  },
}
