import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import {Grid, Typography} from '@material-ui/core';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import HeartIcon from '../assets/heart.svg';
import Moment from 'moment';
import DefaultImg from '../assets/default-placeholder.png';
//import wallpaper from '../assets/walpaper.jpg';

function Carousel1(props){
    //let ids= '';
    const [backdrop, setBackdrop] = useState(''); 

    const SearchVideo = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=c2be14dd7e9184f7bace4a34ed07a444`)
            .then(result => 
                setBackdrop(result.data.backdrops[0].file_path)
            )
            .catch(console.error)
    }

    
    return (
        <div>
            <Grid container item xs={12} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <Typography variant="h4" >Upcoming Movies</Typography>
                </Grid>
               <Item movies={props.movies2} backdrop={backdrop} viewMovieInfo={props.viewMovieInfo} SearchVideo={SearchVideo}/>
                            
                
            </Grid>
        </div>
    )
}


function Item(props){
    return (
        <Grid container item xs={12} direction="row"  alignItems="center" justify="center"  
             
            style={{
                backgroundImage: `URL(http://image.tmdb.org/t/p/original${props.backdrop}`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50%'
            }}>
            <Carousel animation="slide"  
                navButtonsAlwaysVisible  interval={4000} indicators={false}
                style={{
                    margin: 0,
                }}>
            {
                props.movies.map((movie, i) =>{
                    return(    
                        <Grid key={i} container item lg={12} spacing={3} direction="row" justify="center" alignItems="center"
                            onLoad={()=>props.SearchVideo(movie.id)} onClick={()=>props.viewMovieInfo(movie.id)}
                            style={{width: '90vw', paddingLeft: 100, paddingRight: 100, paddingTop: 50, paddingBottom:50, textAlign: 'center'}}>
                            <Grid item lg={3} sm={12}>
                            {
                                movie.poster_path == null ? 
                                <img src={DefaultImg}
                                    alt="" style={{height: '25vw'}}  /> : 
                                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                                    style={{maxWidth: 200}} />
                            }
                            </Grid>
                            <Grid item lg={9} sm={12} style={{backgroundColor: 'rgba(255,255,255,0.6)'}}>
                                <Typography variant="h4"><b>{movie.title}</b> ({Moment(movie.release_date).format('YYYY')})</Typography>
                                <Typography variant="h6" gutterBottom><i>{movie.tagline}</i></Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    {
                                        Moment(movie.release_date).format('D MMMM YYYY')
                                    }
                                </Typography>
                                <Grid container item direction="row" xs={12} justify="center">
                                    <Rating value={movie.vote_average/2} precision={0.1} max={5} size="small" readOnly/>
                                    <img src={HeartIcon} alt=""
                                        style={{paddingLeft: 15, paddingRight: 5, height: 19}}/>
                                    <Typography variant="body1" gutterBottom>{movie.vote_count} likes</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
            </Carousel>
        </Grid>
    )
}

export default Carousel1;