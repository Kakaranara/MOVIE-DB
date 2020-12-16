import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 1000,
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
          height="300"
          image="https://picsum.photos/250/500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nama} <br/> <div style={{fontSize:16,color:"gray"}}>({props.nim})</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.quote}
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
