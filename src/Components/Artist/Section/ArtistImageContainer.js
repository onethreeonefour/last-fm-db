import React, { useEffect, useState } from 'react';
import { BRAINZ_URL } from '../../../Config';
import ArtistImage from './ArtistImage';

function ArtistImageContainer(props) {
    const [BrainzID, setBrainzID] = useState("")

    //Fetch BrainzID
    useEffect(() => {
        fetch(`${BRAINZ_URL}${props.name}&fmt=json`)
            .then(response => response.json())
            .then(response => {
                if (response.count > 0) {
                    setBrainzID(response.artists[0].id)
                }
            })

    }, [])

    return (
        <div style={{ marginTop: "1rem" }}>
            <ArtistImage
                id={BrainzID}
            />
        </div>
    )
}

export default ArtistImageContainer
