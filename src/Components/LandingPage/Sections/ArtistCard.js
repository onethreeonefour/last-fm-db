import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { FAN_ART_API } from '../../../Config'
import Blank from '../../../Images/blank-profile.png'


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

function ArtistCard(props) {

    const classes = useStyles();

    const [Image, setImage] = useState([])

    useEffect(() => {
        if (props.id.length > 0) {
            fetch(`https://webservice.fanart.tv/v3/music/${props.id}?api_key=${FAN_ART_API}`)
                .then(response => response.json())
                .then(response => {
                    if (response.hasOwnProperty('artistthumb')) {

                        let randomNum = response.artistthumb.length-1;
                        let randomPicture = Math.floor(Math.random() * randomNum)
                        let tempStr = response.artistthumb[randomPicture].url;
                        let newStr = tempStr.substring((15));
                        setImage("https://"+newStr);
                    }
                })
        }
    }, [props.id])

    return (
        <div>
            {Image.length > 0 ?
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Image}
                            title="Artist"
                        />
                        <CardContent>
                            <h2 className="bold">{props.artist.name}</h2>
                            <h3 className="lighter">Playcount  &#x2022; {props.artist.playcount}</h3>
                        </CardContent>
                    </CardActionArea>

                </Card> :
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Blank}
                            title="Artist"
                        />
                        <CardContent>
                            <h2 className="bold">{props.artist.name}</h2>
                            <h3 className="lighter">Playcount  &#x2022; {props.artist.playcount}</h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </div >
    )
}

export default ArtistCard
