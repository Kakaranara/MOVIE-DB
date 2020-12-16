import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MovieInfo = (props) =>{
    return(
        <div>
            <div onClick={props.closeMovieInfo}>
                <ArrowBackIcon></ArrowBackIcon>
                <spam>Go Back</spam>
            </div>
            <div>
                <div>
                { 
                props.CurMovie.poster_path == null ? <img src={"https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png"} alt="" style={{ width: '100%', height: 360}} /> :
                <img src={`http://image.tmdb.org/t/p/w185${props.CurMovie.poster_path}`} alt="" style={{ width: '100%', height: 360}}/>
                }
                </div>
            <div>
                <div>
                    <p>{props.CurMovie.title}</p>
                    <p>{props.CurMovie.release_date}</p>
                    <p>{props.CurMovie.overview}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MovieInfo;