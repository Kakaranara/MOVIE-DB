import React from 'react';
import {TextField, Box, Grid} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Grouped(props) {
    const options = props.movies1.map((option) => {
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
        <Grid container item xs={12} alignItems="center" justify="center">
            <Grid item xs={4}>
                <Autocomplete
                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                    groupBy={(option) => option.firstLetter}
                    value={TextField.value}
                    getOptionLabel={(option) => option.title}
                    getOptionSelected={(option, value) => option.iso === value.iso}
                    inputValue={TextField.value}
                    onInputChange={props.handleChange}
                    onKeyDown={keyPress}
                    autoHighlight={false}
                    autoSelect={false}
                    fullWidth={true}
                    renderInput={(params) => 
                        <Box marginBottom={3}>
                            <TextField {...params} label="Search"  onKeyDown={keyPress}/>
                        </Box>
                    }
                />
            </Grid>
            <Grid item lg={8}>
                {/* <FormControl>
                    <InputLabel>Search Type</InputLabel>
                    <Select
                        onChange={props.handleChange}
                        displayEmpty
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl> */}
            </Grid>
        </Grid>
    );
}
