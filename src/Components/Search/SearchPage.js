import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL, } from '../../Config'

function SearchPage(props) {

    const [SearchResults, setSearchResults] = useState([])
    console.log(props)
    useEffect(() => {
        fetch(`${API_URL}artist.search&artist=${props.match.params.query}&api_key=${API_KEY}&format=json&limit=25`)
            .then(response => response.json())
            .then(response => {
                console.log(response.results.artistmatches.artist)
                setSearchResults(response.results.artistmatches.artist)
            })

    }, [])

    return (
        <div>
            {SearchResults && SearchResults.length > 0 ?
                <div style={{ marginTop: "2.5rem", padding: "1rem", backgroundColor: "#363732", gap:"1rem" }}>
                    <h1>Search Results</h1>
                    <div className="row-three">
                        {SearchResults.map((artist, index) => (
                            <a key={index} href={`/artist/${artist.name}`} className="search-link">
                                {artist.name}
                            </a>
                        ))}
                    </div>
                </div> :
                <div style={{ display: "flex" }}>
                    <h1 style={{ margin: "auto", marginTop: "45vh" }}>Fetching Results...</h1>
                </div>}
        </div>
    )
}

export default SearchPage
