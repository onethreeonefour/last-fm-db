import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../Config';
import AlbumTag from './Sections/AlbumTag'

function AlbumPage(props) {
    const [Album, setAlbum] = useState({})

    useEffect(() => {
        fetch(`${API_URL}album.getinfo&api_key=${API_KEY}&artist=${props.match.params.artistName}&album=${props.match.params.albumName}&format=json`)
            .then(response => response.json())
            .then(response => {
                if (response.hasOwnProperty("album")) {
                    setAlbum(response.album)
                }

            })

    }, [])

    return (
        <div>
            {Album.hasOwnProperty("artist") ?
                <div className="album-info-container">
                    <div className="row-two album-info" style={{ boxShadow: "1px 2px 20px rgba(0, 0, 0, 0.3)" }}>
                        <div style={{ margin: "auto" }}>
                            <img src={Album.image[3]["#text"]} alt="album-art" className="album-image-grid" ></img>
                            <h2 style={{ textAlign: "center" }}>{Album.name}</h2>
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
                    <br />
                    <h2 className="center-text" style={{padding:"2rem"}}>Track Listing</h2>
                    <div className="row-two album-info">
                        {Album && Album.tracks.track.map((track, index) => (
                            <p key={index} className="center-text track-list" >{track.name}</p>
                        ))}
                    </div>
                </div>
                :
                <div style={{ display: "flex", margin: "auto", marginTop: "45vh", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <h1>This album cannot be found :(</h1>
                        <br />
                        <a href={`/`} className="search-link" style={{ padding: "1rem", borderTop: "2px", borderStyle: "solid", borderColor: "gray" }}>Go Back To Whence You Came</a>
                    </div>
                </div>
            }
        </div>



    )
}

export default AlbumPage
