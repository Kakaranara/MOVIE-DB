import React from 'react';
import Movie from './Movie'

const MovieList = (props) =>{
    return(
    <div>
        <div>
            <div>
                {
                    props.movies.map((movie, i) =>{
                        return(
                            <Movie key={i} image={movie.poster_path}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}

export default MovieList;