import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import walpaper from '../assets/walpaper.jpg'

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

function Carousel1(props)
{
    //console.log(props);
    return (
        <div style={{backgroundImage: `url(${(walpaper)})`}}>
        <Grid container item xs={12} direction="row" justify="center" alignItems="center" >
        <Grid container item xs={12} direction="row" justify="center" alignItems="center">
        <p style={{color: 'white'}}>Upcoming Movies</p>
        </Grid>
        <Grid container item xs={9} direction="row" justify="center" alignItems="center">
        <Carousel>
        {
            props.movies2.map((movie, i) =>{
                return(
                        <Item key={i} image={movie.poster_path} movieID={movie.id} viewMovieInfo={props.viewMovieInfo}/>
                )
            })
        }

        </Carousel>
        </Grid>
        </Grid>
        </div>
    )
}


function Item(props)
{
    const classes = useStyles();
    //console.log(props.movieID);
    return (
        <CardActionArea >
        <Card className={classes.root} onClick={() => props.viewMovieInfo(props.movieID)}>
            <CardMedia className={classes.media}>
                {
                    props.image == null ? <img src={`https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png`}
                        alt=""
                        style={{ width: "100%"}} /> : <img src={`http://image.tmdb.org/t/p/w500${props.image}`} alt=""
                            style={{ width: "100%"}} />
                }
            </CardMedia>
        </Card>
        </CardActionArea>
        
    )
}

export default Carousel1;