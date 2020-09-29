import React, { useEffect, useState } from 'react';
import { BRAINZ_URL } from '../../../Config';
import TopArtistImage from './TopArtistImage'

function TopArtist(props) {

    const [BrainzID, setBrainzID] = useState([])

    useEffect(() => {
        fetch(`${BRAINZ_URL}${props.artist.name}&fmt=json`)
            .then(response => response.json())
            .then(response => {
                if (response.count > 0) {
                    setBrainzID(response.artists[0].id)
                }
            })
    }, [])


    return (
        <div>
            <TopArtistImage
                artist={props}
                id={BrainzID}
            />
        </div>
    )
}

export default TopArtist
