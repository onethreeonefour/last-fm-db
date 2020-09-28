import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, BRAINZ_URL } from '../../../Config';
import ArtistCard from './ArtistCard'


const randomNum = Math.floor((Math.random() * 10));

function TrendingArtist(props) {

    const [Image, setImage] = useState("")
    const [BrainzID, setBrainzID] = useState([])

    useEffect(() => {

        fetch(`${API_URL}artist.gettopalbums&artist=${props.artist.name}&api_key=${API_KEY}&format=json&limit=10`)
            .then(response => response.json())
            .then(response => {
                setImage(response.topalbums.album[randomNum].image[3]["#text"])
            })

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
                    image={Image}
                />
            </a>
        </div>

    );
}

export default TrendingArtist
