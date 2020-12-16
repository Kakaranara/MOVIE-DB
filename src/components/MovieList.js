import React from 'react';
import Movie from './Movie'
import Grid from '@material-ui/core/Grid';

const MovieList = (props) =>{
    return(
    <div>
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                {
                    props.movies.map((movie, i) =>{
                        return(
                            <Movie key={i} image={movie.poster_path} title={movie.title} date={movie.release_date}/>
                        )
                    })
                }
            </Grid>
        </Grid>
    </div>
    )
}

export default MovieList;