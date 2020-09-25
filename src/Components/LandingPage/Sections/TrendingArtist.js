import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { API_KEY, API_URL } from '../../../Config';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: "#444444",
        boxShadow: "0 4px 6px 0 hsla(0, 0%, 0%, 0.2)"

    },
    media: {
        height: 340,
    },
});

const randomNum = Math.floor((Math.random() * 10));


function TrendingArtist(props) {

    const [Image, setImage] = useState("")

    useEffect(() => {
        fetch(`${API_URL}artist.gettopalbums&artist=${props.artist.name}&api_key=${API_KEY}&format=json&limit=10`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setImage(response.topalbums.album[randomNum].image[3]["#text"])
            })

    }, [props])

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Image ? Image : props.artist.image[0]["#text"]}
                    title="Artist"
                />
                <CardContent>
                    <h2 className="bold">
                        {props.artist.name}
                    </h2>
                    <p className="lighter">
                        Playcount &#x2022; {props.artist.playcount}
                    </p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" style={{ backgroundColor: "#0A0A0A", color: "whitesmoke" }}>
                    Learn More
          </Button>
                <Button size="small" variant="outlined" style={{ backgroundColor: "#0A0A0A", color: "whitesmoke" }}>
                    Get Similar
          </Button>
            </CardActions>
        </Card>
    );
}

export default TrendingArtist
