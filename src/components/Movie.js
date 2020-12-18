import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardActionArea, CardContent, CardMedia, Typography, Grid
} from '@material-ui/core';
import Moment from 'moment';
import DefaultImg from '../assets/default-placeholder.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        height: 525,
        margin: 10,
        borderRadius: 15,
    },
    media: {
        height: 375,
    },
    popularity: {
        float: "right",
    }
});

const Movie = (props) =>{
    const classes = useStyles();
    return(
        <div>
            <CardActionArea>
                <Card className={classes.root} onClick={() => props.viewMovieInfo(props.movieID)}>
                    <CardMedia className={classes.media}>
                        {
                        props.image == null ? 
                        <img src={DefaultImg}
                            alt="" style={{height: 375, maxHeight: 375}}/> : 
                        <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="" style={{height: 375, maxHeight: 375}}/>
                        }
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="caption" style={{fontSize: 12,color: "gray"}}>
                            {Moment(props.date).format("MMM D, YYYY")}
                        </Typography>
                        <Grid container style={{height: 100, maxHeight: 100, overflow: "visible"}} justify="center" alignItems="center">
                            <Grid item >
                                <Typography align="center" variant="h6">{props.title}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    );
}

export default Movie;