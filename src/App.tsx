import {useEffect, useState} from 'react'
import './App.css'

function App() {

    useEffect(() => {
        console.log('effect')

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '6c2aa814-1511-41b3-974e-263ef2c395d3'
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))

    }, [])

    const [selectedTrack, setSelectedTrack] = useState(null)
    const [selectedTrackId, setSelectedTrackId] = useState(null)
    const [tracks, setTracks] = useState(null)

    if (tracks === null) {
        return <div>
            <h1>Musicfun</h1>
            <span>Loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <h1>Musicfun</h1>
            <span>Loading...</span>
        </div>
    }

    return (
        <div>
            <h1>Musicfun</h1>
            <div style={{display: 'flex'}}>
                <ul>
                    {tracks.map(track =>
                        <li key={track.id}
                            style={{border: selectedTrack?.id === track.id ? '1px solid orange' : ''}}
                        >
                            <div onClick={() => {
                                setSelectedTrackId(track.id)

                                fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${track.id}`, {
                                    headers: {
                                        'api-key': '6c2aa814-1511-41b3-974e-263ef2c395d3'
                                    }
                                }).then(res => res.json())
                                    .then(json => setSelectedTrack(json.data))}
                            }>
                                {track.attributes.title}
                            </div>
                            <audio src={track.attributes.attachments[0].url} controls={true}></audio>
                        </li>)}
                </ul>
                <h3>Details
                    {selectedTrack === null
                        ? 'Track is not selected'
                        : <h3>{selectedTrack.attributes.title}</h3>}
                </h3>
            </div>
        </div>
    )
}

export default App
