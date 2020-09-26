import React from 'react'

function DiscoverTags() {
    return (
        <div>
            <h1>Discover Music - From Past to Now</h1>
            <div className="row-two tag-container" >
                <a href="/tag/alternative" target="_blank" className="alt big-image-grid align-center inset-red center-text">Alternative</a>
                <div className="row-three">
                    <a href="/tag/blues" target="_blank" className="blues small-image-grid inset-blue center-text">Blues</a>
                    <a href="/tag/country" target="_blank" className="country small-image-grid inset-green center-text">Country</a>
                    <a href="/tag/electronic" target="_blank" className="electronic small-image-grid inset-yellow center-text">Electronic</a>
                    <a href="/tag/hip-hop" target="_blank" className="hip-hop small-image-grid inset-orange center-text">Hip-Hop</a>
                    <a href="/tag/indie" target="_blank" className="indie small-image-grid inset-purple center-text">Indie</a>
                    <a href="/tag/jazz" target="_blank" className="jazz small-image-grid inset-red center-text">Jazz</a>
                    <a href="/tag/punk" target="_blank" className="punk small-image-grid inset-blue center-text">Punk</a>
                    <a href="/tag/rnb" target="_blank" className="rnb small-image-grid inset-green center-text">RnB</a>
                    <a href="/tag/rock" target="_blank" className="rock small-image-grid inset-yellow center-text">Rock</a>
                </div>
            </div>
        </div>
    )
}

export default DiscoverTags
