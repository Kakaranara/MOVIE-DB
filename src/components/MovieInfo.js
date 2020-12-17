import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';


const MovieInfo = (props) =>{
    return(
        <Grid container spacing={1} >
            <div onClick={props.closeMovieInfo}>
                <ArrowBackIcon></ArrowBackIcon>
                <span>Go Back</span>
                <p> </p>
            </div>
            <Grid container item xs={12} spacing={3} direction="row" alignItems="center">
                <Grid item xs={3}>
                { 
                props.CurMovie.poster_path == null ? <img src={"https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png"} alt="" style={{ width: '100%', height: 360}} /> :
                <img src={`http://image.tmdb.org/t/p/w185${props.CurMovie.poster_path}`} alt="" style={{ width: '100%', height: 360}}/>
                }
                </Grid>
            <Grid item xs={8} >
                    <p>{props.CurMovie.title}</p>
                    <p>{props.CurMovie.release_date}</p>
                    <p>{props.CurMovie.overview}</p>
            </Grid>
            </Grid>
        </Grid>
    )
}

export default MovieInfo;