import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../../Config';
import AlbumCarousel from './AlbumCarousel'


function ArtistAlbumImage(props) {

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
        <div style={{ width: '85%', margin: "auto" }}>
            <h1>Top Rated Albums</h1>
            <AlbumCarousel
                albumImage={Image}
            />
        </div>
    )
}

export default ArtistAlbumImage