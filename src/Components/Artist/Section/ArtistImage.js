import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../../Config';
import AlbumCarousel from './AlbumCarousel'


function ArtistImage(props) {

    const [Image, setImage] = useState([])

    useEffect(() => {
        fetch(`${API_URL}artist.gettopalbums&artist=${props.artist.artist.name}&api_key=${API_KEY}&format=json&limit=20`)
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                setImage(response.topalbums.album)
            })

    }, [])

    return (
        <div>
            <AlbumCarousel
                albumImage={Image}
            />
        </div>
    )
}

export default ArtistImage
