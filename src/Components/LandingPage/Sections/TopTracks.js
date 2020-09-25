import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { API_KEY, API_URL } from '../../../Config';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "#444444",

    },
    media: {
        height: 400,
    },
});

const randomNum = Math.floor(Math.random() * 5);

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
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Image ? Image : props.track.image[2]["#text"]}
                    title="Single - Art"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.track.artist.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.track.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="body2" component="p" style={{ paddingLeft: "0.5rem" }}>
                    Playcount &#x2022; {props.track.playcount}
                </Typography>
            </CardActions>
        </Card>
    );
}

export default TopTracks
