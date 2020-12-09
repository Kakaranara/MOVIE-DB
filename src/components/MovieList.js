import React from 'react';
import Movie from './Movie'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
    },
    },
}));

const MovieList = (props) =>{
    const classes = useStyles();
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
        <div className={classes.root} >
            <Pagination count={props.pageL} variant="outlined" shape="rounded"/>
        </div>
    </div>
    )
}

export default MovieList;