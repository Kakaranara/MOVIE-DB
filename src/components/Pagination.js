import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
    },
    },
}));

const Paginations = (props) =>{
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        props.nextPage(value);
    };   

    return(
        <div className={classes.root}>
            <Pagination count={props.pages+1} variant="outlined" shape="rounded" 
                page={page}
                onChange={handleChange}>
            </Pagination>
        </div>        
    )
}

export default Paginations;