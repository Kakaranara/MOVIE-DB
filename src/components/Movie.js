import React from 'react';
import Card from '@material-ui/core/Card';

const Movie = (props) =>{
    return(
        <div>
            <Card>
                <div>
                    {
                        props.image == null ? <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.askc.us%2Fhome%2Fdefault-image%2F&psig=AOvVaw14AdZSFv2RER1asrNKp34z&ust=1607264149626000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDtotiDt-0CFQAAAAAdAAAAABAT`}
                        style={{width: "100%", height : 360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`}
                        style={{width: "100%", height : 360}}/>
                    }
                </div>
            </Card>
        </div>
    )
}

export default Movie;