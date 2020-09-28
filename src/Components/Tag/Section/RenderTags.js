import React from 'react'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));
  
function RenderTags(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.tag ? <Chip label={props.tag.name} component="a" href={`/tag/${props.tag.name}`} clickable></Chip> : <h1><p>loading</p></h1>}
        </div>
    )
}

export default RenderTags
