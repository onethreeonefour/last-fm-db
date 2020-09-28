import React, { useEffect, useState } from 'react';
import { FAN_ART_API } from '../../../Config'

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
                        let tempStr = response.artistthumb[0].url;
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
                    <img src={Image} alt="top-artist" className="small-image-grid inset-blue center-text"></img>
                    <p>{props.artist.artist.name}</p>
                </div>
                :
                <div>
                    <img src={props.image} alt="top-artist" className="small-image-grid inset-blue center-text"></img>
                    <p>{props.artist.artist.name}</p>
                </div>
            }
        </div>
    )
}

export default TopArtistImage
