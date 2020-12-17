import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        height: 450,
        margin: 10
    },
    media: {
        height: 300,
    },
});

const PeopleCard = (props) => {
    const classes = useStyles();
    return (
            <CardActionArea className={classes.root}>
                <Card>
                    <CardMedia className={classes.media}>
                        {
                            props.image == null ? <img src={`https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png`}alt=""
                                style={{ height: 300 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt=""
                                    style={{ height: 300 }} />
                        }
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{height: 90, maxHeight: 90, textAlign: "center"}}>
                            {props.nama}
                        </Typography>
                        <Typography 
                            gutterBottom 
                            variant="body1" 
                            component="h3" 
                            style={{color:'#9c9c9c'}}    
                        >
                            Popularity : {props.popular}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
    );
}

export default PeopleCard;