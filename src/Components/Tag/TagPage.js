import React, { useEffect, useState } from 'react';
import TopArtist from './Section/TopArtist';
import SimilarTags from './Section/SimilarTags'

import { API_KEY, API_URL } from '../../Config';

function TagPage(props) {

    const [Content, setContent] = useState([]);
    const [Artist, setArtist] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}tag.getinfo&tag=${props.match.params.tagId}&api_key=${API_KEY}&format=json`)
            .then(response => response.json())
            .then(response => {
                let tempArr = [];
                let newArr = [];
                tempArr.push(response.tag.wiki.content)
                let end = tempArr[0].indexOf("<a ");
                newArr = tempArr[0].slice(0, end);
                setContent(newArr)
            })

        fetch(`${API_URL}tag.gettopartists&tag=${props.match.params.tagId}&api_key=${API_KEY}&format=json&limit=6`)
            .then(response => response.json())
            .then(response => {
                setArtist(response.topartists.artist)
            })
    }, [])
    //console.log(Artist)


    return (
        <div className="container" style={{ width: '85%', paddingTop: "3rem" }}>
            {Content ?
                <div className="row-two" style={{ gap: '1rem' }}>
                    <div>
                        <h1>{props.match.params.tagId}</h1>
                        <h4>Summary</h4>
                        <p>{Content}</p>
                        <SimilarTags
                            artist={Artist}
                        />
                    </div>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>Most Popular</h2>
                        <div className="row-three">
                            {Artist && Artist.map((artist, index) => (
                                <a href={`/artist/${artist.name}`} key={index}>
                                    <TopArtist
                                        key={index}
                                        artist={artist}
                                    />
                                </a>
                            ))
                            }
                        </div>
                    </div>
                </div> :
                <div style={{ display: "flex", margin: "auto", marginTop: "35vh", justifyContent: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <h1>This tag cannot be found! :^(</h1>
                        <br />
                        <a href={`/`} className="search-link" style={{ padding: "1rem", borderTop: "2px", borderStyle: "solid", borderColor: "gray" }}>Go Back To Whence You Came</a>
                    </div>
                </div>}

        </div>
    )
}

export default TagPage
