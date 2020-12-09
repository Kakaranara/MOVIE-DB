import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
root: {
    maxWidth: 300,
    height: 450,
    margin: 10
},
media: {
    height: 300,
},
});

const Movie = (props) =>{
    const classes = useStyles();
    return(
        <div>
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia className={classes.media}>
            {
            props.image == null ? <img src={`https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png`}
            style={{width: "300px", height : 300}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`}
            style={{width: "300px", height : 300}}/>
            }
        </CardMedia>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h2" style={{fontSize: 12,color: "gray"}}>
            {props.date}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
            {props.title}
            </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
        </div>
    );
}

export default Movie;