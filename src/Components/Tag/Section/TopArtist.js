import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, BRAINZ_URL } from '../../../Config';
import TopArtistImage from './TopArtistImage'

function TopArtist(props) {

    const [Image, setImage] = useState([])
    const [BrainzID, setBrainzID] = useState([])

    useEffect(() => {

        fetch(`${API_URL}artist.gettopalbums&artist=${props.artist.name}&api_key=${API_KEY}&format=json&limit=1`)
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                setImage(response.topalbums.album[0].image[3]["#text"])
            })

        fetch(`${BRAINZ_URL}${props.artist.name}&fmt=json`)
            .then(response => response.json())
            .then(response => {
    
                setBrainzID(response.artists[0].id)
            })
    }, [])


    return (
        <div>
            <TopArtistImage
                artist={props}
                image={Image}
                id={BrainzID}
            />
        </div>
    )
}

export default TopArtist
