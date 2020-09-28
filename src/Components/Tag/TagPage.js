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


    return (
        <div className="container" style={{ width: '85%', paddingTop: "3rem" }}>
            {Content ?
                <div className="row-two" style={{ gap: '1rem' }}>
                    <div>
                        <h1>Summary</h1>
                        <p>{Content}</p>
                        <SimilarTags
                            artist={Artist}
                        />
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Most Popular</h3>
                        <div className="row-three">
                            {Artist && Artist.map((artist, index) => (
                                <TopArtist
                                    key={index}
                                    artist={artist}
                                />
                            ))
                            }
                        </div>
                    </div>
                </div> : <div><h1>Loading</h1></div>}

        </div>
    )
}

export default TagPage
