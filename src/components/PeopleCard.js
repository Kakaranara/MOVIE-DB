import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
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
            <CardActionArea>
                <Card className={classes.root}>
                    <CardMedia className={classes.media}>
                        {
                            props.image == null ? <img src={`https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png`}alt=""
                                style={{ width: "300px", height: 300 }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt=""
                                    style={{ width: "300px", height: 300 }} />
                        }
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.nama}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
    );
}

export default PeopleCard;