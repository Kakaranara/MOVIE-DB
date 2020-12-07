import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProfileCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://miro.medium.com/max/776/1*Lad06lrjlU9UZgSTHUoyfA.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nama} <br/> <div style={{fontSize:16,color:"gray"}}>({props.nim})</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            {/* {props.quotes} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
