import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
            backgroundColor: '#0A0A0A'
        }}>
           <p> By Terry Nguyen </p>
           <a href="http://lightontheland.net/" style={{color:'white'}} target="_blank" rel="noopener">lightontheland.net</a>
        </div>
    )
}

export default Footer
