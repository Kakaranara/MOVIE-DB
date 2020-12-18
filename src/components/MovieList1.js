import React from 'react';
import Movie from './Movie'
import Grid from '@material-ui/core/Grid';

const MovieList1 = (props) =>{
    return(
    <div>
        <Grid container spacing={1} >
            <Grid container item xs={12} spacing={3} direction="row" justify="center" alignItems="center">
                <p style={{fontSize: 25}}>Now Playing On Theater</p>
            </Grid>
            <Grid container item xs={12} spacing={3} direction="row" justify="center" alignItems="center">
                {
                    props.movies3.map((movie, i) =>{
                        return(
                                <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieID={movie.id} image={movie.poster_path} title={movie.title} date={movie.release_date}/>
                        )
                    })
                }
            </Grid>
        </Grid>
    </div>
    )
}

export default MovieList1;