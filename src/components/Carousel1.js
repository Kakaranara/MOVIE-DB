import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import walpaper from '../assets/walpaper.jpg'
import axios from 'axios';

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
    //let ids= '';
    const [count, setCount] = useState('');  

    const SearchVideo = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c2be14dd7e9184f7bace4a34ed07a444&language=en-US`)
            .then(result => {
                setCount(result.data.results[0].key); 
            })
            .catch(console.error)
    }

    
    return (
        <div style={{backgroundImage: `url(${(walpaper)})`}}>
        <Grid container item xs={12} direction="row" justify="center" alignItems="center">
        <Grid container item xs={12} direction="row" justify="center" alignItems="center">
        <p style={{color: 'white', fontSize: 25}} >Upcoming Movies</p>
        </Grid>
        <Grid container item xs={12} direction="row" justify="center" alignItems="center" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <Carousel>
        {
            props.movies2.map((movie, i) =>{
                return(
                        <Item key={i} image={movie.poster_path} movieID={movie.id} viewMovieInfo={props.viewMovieInfo} SearchVideo={SearchVideo} count={count}/>
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
    return (
        <Grid container item xs={12} direction="row" justify="center" alignItems="center"   >
        <Grid container item xs={5} direction="row" justify="center" alignItems="center">
            
            <CardActionArea >
            <Card className={classes.root} onClick={() => props.viewMovieInfo(props.movieID)} onLoad={() => props.SearchVideo(props.movieID)}>
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
        </Grid>
        <Grid container item xs={5} direction="row" justify="center" alignItems="center">
            <iframe width="1000" height="315" title={`title${props.count}`}
            src={`https://www.youtube.com/embed/${props.count}?autoplay=0`}>
            </iframe> 
        </Grid>
        </Grid>
    )
}

export default Carousel1;