import React, { useEffect, useState } from 'react';
import { BRAINZ_URL } from '../../../Config';
import ArtistCard from './ArtistCard'


function TrendingArtist(props) {
    const [BrainzID, setBrainzID] = useState([])

    useEffect(() => {
        fetch(`${BRAINZ_URL}${props.artist.name}&fmt=json`)
            .then(response => response.json())
            .then(response => {
                setBrainzID(response.artists[0].id)
            })
    }, [])
    
    return (
        <div style={{paddingBottom:"1rem"}}>
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
