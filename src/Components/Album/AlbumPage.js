import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../Config';
import AlbumTag from './Sections/AlbumTag'

function AlbumPage(props) {
    const [Album, setAlbum] = useState({})

    useEffect(() => {
        fetch(`${API_URL}album.getinfo&api_key=${API_KEY}&artist=${props.match.params.artistName}&album=${props.match.params.albumName}&format=json`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.hasOwnProperty("album")) {
                    setAlbum(response.album)
                }

            })

    }, [])

    return (
        <div>
            {Album.hasOwnProperty("artist") ?
                <div>
                    <div className="row-two" style={{ marginTop: "2.1rem", padding: "1rem", backgroundColor: "#363732" }}>
                        <div style={{ margin: "auto" }}>
                            <img src={Album.image[3]["#text"]} alt="album-art" className="album-image-grid" ></img>
                            <h3 style={{ textAlign: "center" }}>{Album.name}</h3>
                        </div>
                        <div style={{ overflow: "hidden" }}>
                            <a href={`/artist/${Album.artist}`}><h1>{Album.artist}</h1></a>
                            <h3>Release Date - <span>{Album.wiki ? Album.wiki.published : "Not Avaliable"}</span></h3>
                            <h3>Summary</h3>
                            <p>{Album.wiki ? Album.wiki.summary : "No summary avaliable - Last FM has not provided one"}</p>
                            <h4>Listeners - <span>{Album.listeners}</span></h4>
                            <h4>Playcount - <span>{Album.playcount}</span></h4>
                            <h4>Popular Tags</h4>
                            {Album && Album.tags.tag.map((tag, index) => (
                                <AlbumTag
                                    tag={tag}
                                    key={index}
                                />
                            ))}

                        </div>
                    </div >
                    <div className="row-two">
                        <h4 className="center-text">Track Listing</h4>
                        {Album && Album.tracks.track.map((track, index) => (
                            <p key={index} className="center-text track-list" >{track.name}</p>
                        ))}
                    </div>
                </div>
                :
                <div style={{ display: "flex" }}>
                    <h1 style={{ margin: "auto", marginTop: "45vh" }}>Album Not Found :^(</h1>
                </div>
            }
        </div>



    )
}

export default AlbumPage
