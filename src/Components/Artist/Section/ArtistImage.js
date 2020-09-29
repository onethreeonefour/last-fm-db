import React, { useEffect, useState } from 'react';
import { FAN_ART_API } from '../../../Config';
import Blank from '../../../Images/blank-profile.png'

function ArtistImage(props) {
    const [Image, setImage] = useState("")

    useEffect(() => {
        if (props.id) {
            fetch(`https://webservice.fanart.tv/v3/music/${props.id}?api_key=${FAN_ART_API}`)
                .then(response => response.json())
                .then(response => {
                    if (response.hasOwnProperty('artistbackground')) {
                        //console.log(response.artistbackground)
                        let randomNum = response.artistbackground.length-1
                        let randomPicture = Math.floor(Math.random() * randomNum)
                        let tempStr = response.artistbackground[randomPicture].url;
                        let newStr = tempStr.substring((15));
                        setImage("https://" + newStr);
                    }
                })


        }
    }, [props.id])

    return (
        <div>
            {Image ? <img src={Image} className="artist-image-bio" alt="artist-image"></img> :
            
            <img src={Blank} className="blank-artist-image" alt="blank-artist-image"></img>
            
            }
        </div>
    )
}

export default ArtistImage
