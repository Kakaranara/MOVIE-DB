import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card, CardActionArea, CardContent, CardMedia, Typography
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
          alt={props.lod}
          height="300"
          image={props.gambar}
          title="About Us"
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
    </Card>
  );
}
// err