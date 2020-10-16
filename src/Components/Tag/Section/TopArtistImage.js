import React, { useEffect, useState } from 'react';
import { FAN_ART_API } from '../../../Config';

import Blank from '../../../Images/blank-profile.png'

function TopArtistImage(props) {

    const [Image, setImage] = useState([])

    useEffect(() => {
        //if artist has valid musicbrainz id than use that background instead of album art
        if (props.id.length > 0) {
            fetch(`https://webservice.fanart.tv/v3/music/${props.id}?api_key=${FAN_ART_API}`)
                .then(response => response.json())
                .then(response => {
                    if (response.hasOwnProperty('artistthumb')) {
                        //fanart returns wrong url - so this fixes it by removing prefix from api
                        let randomNum = response.artistthumb.length-1;
                        let randomPicture = Math.floor(Math.random() * randomNum)
                        let tempStr = response.artistthumb[randomPicture].url;
                        let newStr = tempStr.substring((15));
                        setImage("https://"+newStr);
                    }
                })
        }

    }, [props.id])
    return (
        <div>
            {Image.length > 0 ?
                <div>
                    <img src={Image} alt="top-artist" className="tag-page-image inset-blue center-text"></img>
                    <p>{props.artist.artist.name}</p>
                </div>
                :
                <div>
                    <img src={Blank} alt="top-artist" className="small-image-grid"></img>
                    <p>{props.artist.artist.name}</p>
                </div>
            }
        </div>
    )
}

export default TopArtistImage
