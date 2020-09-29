import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function AlbumCarousel(props) {
    //console.log(props)


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const renderCards = props.albumImage.map((album, index) => {
       
        if (album.name !== "(null)" && album.image[3]["#text"].length > 0) {
            return <a href={`/artist/${props.name}/album/${album.name}`} key={index}>
                <img src={album.image[3]['#text']} alt='album' className="album-carousel-image"></img>
                <h4>{album.name}</h4>
            </a>
        }

    })


    return (
        <div >
            <Carousel
                responsive={responsive}
                centerMode={true}

            >
                {renderCards}
            </Carousel>
        </div>



    )
}

export default AlbumCarousel
