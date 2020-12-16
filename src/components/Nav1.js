import React from 'react';
import {TextField, Box} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Grouped(props) {
    const options = props.movies.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
    });

    const keyPress = function(e){
        if(e.keyCode === 13){
           props.handleSubmit(e);
        }
     }

    return (
      <Autocomplete
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        value={TextField.value}
        getOptionLabel={(option) => option.title}
        getOptionSelected={(option, value) => option.iso === value.iso}
        inputValue={TextField.value}
        onInputChange={props.handleSubmit}
        onKeyDown={keyPress}
        autoHighlight={true}
        autoSelect={false}
        fullWidth={true}
        onClick={props.handleSubmit}
        renderInput={(params) => 
            <Box marginBottom={3}>
                <TextField {...params} label="Search" onChange={props.handleSubmit} onKeyDown={keyPress}/>
            </Box>
        }
      />
    );
}
