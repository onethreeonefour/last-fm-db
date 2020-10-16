import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { API_KEY, API_URL } from '../../../Config';

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        backgroundColor: "#444444",
        boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)",
        maxHeight: 1200
    },
    media: {
        height: 400,
        maxHeight: 1200,
    },

});


function TopTracks(props) {
    const [Image, setImage] = useState("")

    useEffect(() => {
        fetch(`${API_URL}artist.gettopalbums&artist=${props.track.artist.name}&api_key=${API_KEY}&format=json&limit=20`)
            .then(response => response.json())
            .then(response => {
                // Found a top album that matches in lastFM api
                response.topalbums.album.forEach(index => {
                    let trackName = props.track.name.toLocaleLowerCase();
                    if (index.name.toLocaleLowerCase() === trackName) {
                        setImage(index.image[3]["#text"])
                    }
                })
            })

    }, [props])
    const classes = useStyles();

    return (
        <a href={`/artist/${props.track.artist.name}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={Image ? Image : props.track.image[2]["#text"]}
                        title="Single - Art"
                    />
                    <CardContent>
                        <h2 className="bold">{props.track.artist.name}</h2>
                        <h3 className="lighter">{props.track.name}</h3>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <p style={{ paddingLeft: "0.5rem" }} className="lighter paragraph">Playcount &#x2022; {props.track.playcount}</p>
                </CardActions>
            </Card>
        </a>
    );
}

export default TopTracks
