import React, { useState, useEffect } from 'react'
import SplashHeader from './Sections/SplashHeader'
import TrendingArtist from './Sections/TrendingArtist'
import TopTracks from './Sections/TopTracks'
import { API_KEY, API_URL, } from '../../Config'

function LandingPage() {

    const [Artist, setArtist] = useState([])
    const [Track, setTrack] = useState([])

    useEffect(() => {
        const trendingArtist = `${API_URL}chart.gettopartists&api_key=${API_KEY}&format=json&limit=12`;
        const topTracks = `${API_URL}chart.gettoptracks&api_key=${API_KEY}&format=json&limit=8`;
        fetchTopArtist(trendingArtist);
        fetchTopTracks(topTracks);
    }, [])

    const fetchTopArtist = (path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                setArtist(response.artists)
            })
    }

    const fetchTopTracks = (path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                setTrack(response.tracks)
            })
    }

    return (
        <div>
            <SplashHeader />     
            {/*Top Tracks*/}
            <div className="container">
                <h1>Top Tracks</h1>
            </div>
            <div className="row-four" style={{ width: '85%' }} >
                {Track.track && Track.track.map((track, index) => (
                    <React.Fragment key={index}>
                        <TopTracks
                            track={track}
                        />
                    </React.Fragment>
                ))
                }
            </div>

            {/*Trending Artist*/}
            <div className="container">
                <h1>Trending Artists</h1>
            </div>
            <div className="row-four" style={{ width: '85%' }}>
                {Artist.artist && Artist.artist.map((artist, index) => (
                    <TrendingArtist
                        key={index}
                        artist={artist}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default LandingPage
