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

    // const [selectedTrackId, setSelectedTrackID] = useState(null)
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

            <ul>
                {tracks.map(track =>
                    <li key={track.id}>
                        <div>{track.attributes
                            .title}</div>
                        <audio src={track.attributes.attachments[0].url} controls={true}></audio>
                    </li>)}
            </ul>

        </div>
    )
}

export default App
