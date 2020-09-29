import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../Config';
import ArtistAlbumImage from './Section/ArtistAlbumImage'
import ArtistImageContainer from './Section/ArtistImageContainer'
import ArtistTag from './Section/ArtistTag'


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
    console.log(ArtistInfo)

    return (
        <div>
            {ArtistInfo ?
                <div>
                    <div className="row-two" style={{ marginTop: "2.5rem", padding: "1rem", backgroundColor: "#363732" }}>
                        <div>
                            <ArtistImageContainer
                                mbid={ArtistInfo.artist.mbid}
                                name={ArtistInfo.artist.name}
                            />
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <a href={`/artist/${ArtistInfo.artist.name}`}><h1>{ArtistInfo.artist.name}</h1></a>
                            <p>{ArtistBio}</p>
                            <h4>Listeners - <span>{ArtistInfo.artist.stats.listeners}</span></h4>
                            <h4>Playcount - <span>{ArtistInfo.artist.stats.playcount}</span></h4>
                            <h4>Popular Tags</h4>
                            {ArtistInfo && ArtistInfo.artist.tags.tag.map((tag, index) => (
                                <ArtistTag
                                    tag={tag}
                                    key={index}
                                />
                            ))}
                            <h4>Similar Artists</h4>
                            {ArtistInfo && ArtistInfo.artist.similar.artist.map((artist, index) => (
                                <a href={`/artist/${artist.name}`} key={index} >{artist.name} </a>
                            ))}
                        </div>
                    </div>
                    <ArtistAlbumImage
                        artist={ArtistInfo}
                    />
                </div>
                : <div style={{ display: "flex" }}>
                    <h1 style={{ margin: "auto", marginTop: "45vh" }}>Loading...</h1>
                </div>}
        </div>
    )
}

export default ArtistPage
