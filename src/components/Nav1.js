import React from 'react';
import {TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Nav1 = (props) =>{
    return(
        <form action='' onSubmit={props.handleSubmit}>
            <Autocomplete
                options={props.movies}
                getOptionLabel={(movies) => movies.title}
                renderInput={(params) => 
                    <TextField {...params} label="Search" onChange={props.handleChange}/>}
            />
        </form>
    )
}

export default Nav1;