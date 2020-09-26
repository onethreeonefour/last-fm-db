import React from 'react'
import DiscoverTags from './DiscoverTags'

function SplashHeader() {
    return (
        <div className="splash">
            <div className="neon">Music </div>
            <div className="flux">DB </div>
                
            <div style={{ display: "block" }}>      
                <DiscoverTags />
            </div>
        </div>
    )
}
export default SplashHeader
