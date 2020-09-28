import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../Config';
import ArtistImage from './Section/ArtistImage'


function ArtistPage(props) {

    const [ArtistInfo, setArtistInfo] = useState()
    const [ArtistBio, setArtistBio] = useState([])

    useEffect(() => {
        fetch(`${API_URL}artist.getInfo&artist=${props.match.params.artistName}&api_key=${API_KEY}&format=json&limit=10`)
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                let tempArr = [];
                let newArr = [];
                tempArr.push(response.artist.bio.summary)
                let end = tempArr[0].indexOf("<a ");
                newArr = tempArr[0].slice(0, end);
                setArtistInfo(response)
                setArtistBio(newArr)
            })
    }, [])

    return (
        <div>
            {ArtistInfo ?
                <div>
                    <div className="row-two" style={{ padding: "1.6rem" }}>
                        <div>

                        </div>
                        <div>
                            <h1>{ArtistInfo.artist.name}</h1>
                            <p>{ArtistBio}</p>
                        </div>
                    </div>
                    <ArtistImage
                        artist={ArtistInfo}
                    />
                </div>


                : <h1>Loading</h1>}
        </div>
    )
}

export default ArtistPage
