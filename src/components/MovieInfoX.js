import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    Avatar, Box, Chip, Container, Typography, Button, Grid, 
    Card,CardContent
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import HeartIcon from '../assets/heart.svg';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'moment';
import DefaultImg from '../assets/default-placeholder.png';

const useStyles = makeStyles({
    cover: {
        width: "100%",
    },
});

const MovieInfo = (props) =>{
    const movie = props.CurMovie;
    const review = props.CurMovieReviews;
    const classes = useStyles(props);
    let duration = movie.runtime;
    let date = movie.release_date

    return(
        <Container>
            <Button onClick={props.closeMovieInfo} style={{marginTop: -50}}>
                <ArrowBackIcon/>Go Back
            </Button>
            <Card>
                <Box style={{
                    backgroundImage: `URL(http://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    height: 500,
                    display: movie.backdrop_path != null ? "block" : "none"
                }}/> 
                <CardContent>
                <Grid container direction="column" style={{padding: 50}}>
                    <Grid container item direction="row" justify="center" spacing={5}>
                        <Grid item lg={3} sm={6} md={4} xs={10}>
                        { 
                            props.CurMovie.poster_path == null ? 
                            <img src={DefaultImg} alt="" className={classes.cover}/> :
                            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" 
                                className={classes.cover} style={{marginTop: movie.backdrop_path !== null ? "-100%" : 0}}/>
                        }
                        <Grid container item xs={12} lg={12} direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop: 15}}>
                            {
                                props.CurMovie.genres.map((movie, index) =>{
                                    return(
                                        <Grid item key={index}>
                                            <Chip label={movie.name} color="primary"/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                        </Grid>
                        <Grid item lg={9} xs={12} className={classes.name}>
                            <Typography variant="h3"><b>{movie.name}</b> ({Moment(date).format('YYYY')})</Typography>
                            <Typography variant="h6" gutterBottom><i>{movie.tagline}</i></Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                {
                                    Moment(date).format('D MMMM YYYY')
                                } ▪ {
                                    duration >= 60 ?
                                        <>{parseInt(duration/60)}h {duration % 60}m</> :
                                        <>{duration}m</>
                                }
                            </Typography>
                            <Grid container item direction="row" xs={12}>
                                <Rating value={movie.vote_average/2} precision={0.1} max={5} size="small" readOnly/>
                                <img src={HeartIcon} alt=""
                                    style={{paddingLeft: 15, paddingRight: 5, height: 19}}/>
                                <Typography variant="body1" gutterBottom>{movie.vote_count} likes</Typography>
                            </Grid>
                            <Typography variant="h6" align="justify"><b>Overview</b></Typography>
                            <Typography variant="body1" align="justify">{movie.overview}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </CardContent>
                {
                    (review != null && review !== undefined && review !== '' && review.length) ?
                    <>
                        <hr/>
                        <CardContent>
                            
                            <Grid container style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 20}} flexdirection="column" alignItems="center" justify="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" style={{fontWeight:600}} align="center">Reviews</Typography>
                                    <br/>
                                </Grid>
                                <Grid container item xs={12} flexdirection="column" spacing={5} justify="center" alignItems="center">
                                    {
                                        review.map((review, index) =>{
                                            return(
                                                <Grid container item key={index} xs={12} spacing={1} flexdirection="row" justify="center">
                                                    <Grid container item xs={12} sm={12} md={3} lg={2} spacing={1} flexdirection="row" justify="center" alignItems="center">
                                                        <Grid item lg={3} md={3}>
                                                            {
                                                                review.avatar_path == null ? 
                                                                <Avatar className={classes.large} alt="" src="https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png"/> :
                                                                <Avatar className={classes.large} src={`http://image.tmdb.org/t/p/185${review.author_details.avatar_path}`} alt="" style={{maxWidth: '50%', marginTop: "auto", marginBottom: "auto"}}/>
                                                            }
                                                        </Grid>
                                                        <Grid container item xs={12} sm={12} lg={9} md={9} justify="center" alignItems="center">
                                                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                                                <Typography variant="body1" align="center"><b>{review.author}</b></Typography>
                                                            </Grid>
                                                            <Grid item lg={12} md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                                                                <Rating value={review.author_details.rating/2} precision={1} max={5} size="small" readOnly/>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={9} lg={10}>
                                                        <i><Typography variant="subtitle2" align="justify">"{review.content}"</Typography></i>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                        </CardContent>
                    </> : ''
                }
                {   
                    (movie.production_companies.length) ?
                    <>
                    <hr/>
                    <CardContent>
                        <Grid container style={{paddingLeft: 50, paddingRight: 50, paddingBottom: 20}} flexdirection="row" alignItems="center" justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h5" style={{fontWeight:600}} gutterBottom align="center">Production Companies</Typography>
                                <br/>
                            </Grid>
                            <Grid container item xs={12} flexdirection="column" spacing={2} justify="center" alignItems="center">
                                {
                                    movie.production_companies.map((production, index) =>{
                                        return(
                                            <Grid container item key={index} xs={12} md={6} lg={4} flexdirection="row" alignItems="center" justify="center">
                                                <Grid item xs={12} style={{textAlign: "center"}}>
                                                    {
                                                        production.logo_path == null ? 
                                                        <img src={`https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png`} alt="" style={{height: 100, maxHeight: 100}}/> : 
                                                        <img src={`http://image.tmdb.org/t/p/original${production.logo_path}`} alt="" style={{height: '1%', maxHeight: 100, maxWidth: '100%', marginTop: "auto", marginBottom: "auto"}}/>
                                                    }
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle1" align="center">{production.name} ({production.origin_country})</Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </CardContent>
                    </>
                    : ''
                }
            </Card>
        </Container>
    )
}

export default MovieInfo;