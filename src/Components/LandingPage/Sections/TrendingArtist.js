import React, { useEffect, useState } from 'react';
import { BRAINZ_URL } from '../../../Config';
import ArtistCard from './ArtistCard'


function TrendingArtist(props) {
    const [BrainzID, setBrainzID] = useState([])

    useEffect(() => {
        fetch(`${BRAINZ_URL}${props.artist.name}&fmt=json`)
            .then(response => response.json())
            .then(response => {
                //console.log(response.artists[0].id)
                setBrainzID(response.artists[0].id)
            })
    }, [])
    
    return (
        <div>
            <a href={`/artist/${props.artist.name}`}>
                <ArtistCard
                    id={BrainzID}
                    artist={props.artist}
                  
                />
            </a>
        </div>

    );
}

export default TrendingArtist
