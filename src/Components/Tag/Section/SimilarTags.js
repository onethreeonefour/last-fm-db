import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../../../Config'
import RenderTags from './RenderTags'

function SimilarTags(props) {

    const [Tag, setTag] = useState([])

    useEffect(() => {
        if (props.artist.length > 0) {
            fetch(`${API_URL}artist.getinfo&artist=${props.artist[0].name}&api_key=${API_KEY}&format=json&limit=6`)
                .then(response => response.json())
                .then(response => {
                    setTag(response.artist.tags.tag)
                })

        }
    }, [props])
    return (
        <div>
            <h2>Popular Tags</h2>
            {Tag && Tag.map((tag, index) => (
                <RenderTags
                    key={index}
                    tag={tag}
                />
            ))
            }
        </div>
    )
}

export default SimilarTags
