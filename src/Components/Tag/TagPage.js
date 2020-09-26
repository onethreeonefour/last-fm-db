import React, { useEffect, useState } from 'react';

import { API_KEY, API_URL } from '../../Config';

function TagPage(props) {
    console.log(props.match.params.tagId)

    const [Content, setContent] = useState([])
   

    useEffect(() => {
        fetch(`${API_URL}tag.getinfo&tag=${props.match.params.tagId}&api_key=${API_KEY}&format=json`)
            .then(response => response.json())
            .then(response => {
                
                let tempArr = [];
                let newArr = [];

                tempArr.push(response.tag.wiki.content)
                let end = tempArr[0].indexOf("<a ");
                newArr = tempArr[0].slice(0,end);

                setContent(newArr)
            })
    }, [])
    
    return (
        <div className="container" style={{width:'85%'}}>
            {Content ?
                <div>
                    <h2>Summary</h2>
                    <p>{Content}</p>
                    
                </div> : <div><h1>Loading</h1></div>}
        </div>
    )
}

export default TagPage
