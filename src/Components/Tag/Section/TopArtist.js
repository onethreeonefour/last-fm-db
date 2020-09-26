import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../../Config';

function TopArtist(props) {

    const [Image, setImage] = useState([])

    useEffect(() => {

        fetch(`${API_URL}artist.gettopalbums&artist=${props.artist.name}&api_key=${API_KEY}&format=json&limit=1`)
        .then(response => response.json())
        .then(response => {
            //console.log(response)
            setImage(response.topalbums.album[0].image[3]["#text"])
        })
    }, [])


    console.log(Image)
    return (
        <div>
            {Image ? 
            <img src={Image} alt="top-artist" className="small-image-grid inset-blue center-text"></img>
            :<div>Loading</div>}
        </div>
    )
}

export default TopArtist
