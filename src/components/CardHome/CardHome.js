import React from 'react';
import { makeStyles, GridList, GridListTile, Box, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    justifyContent: "center",
    backgroundColor: "#e3e1dc",
  },

  margin: {
    backgroundColor: "#e8b633",
    fontSize: 12,
  },
}));

function dispButton(){
  window.alert ("Hello there!!");
}

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
        <Card >
          <CardContent className={classes.root}>
            <Typography className={classes.pos} color="textSecondary">
              <Grid container justify="center">
                Get your sunshine at
              </Grid>
            </Typography>
            <br />
            <p>
              <Grid container justify="center">
                { props.dispTime }
              </Grid>
            </p>
          </CardContent>
          <CardActions className={classes.root}>
            <div>
              <Typography color="textSecondary">
                Would you like a notification?
              </Typography>
              <Grid container justify="center">
                <Button onClick={dispButton} variant="contained" size="small" className={classes.margin}>Notify</Button>
              </Grid>
              <Typography color="textSecondary">
                Tell us how your walk was!
              </Typography>
              <Grid container justify="center">
                <Button onClick={dispButton} variant="contained" size="small" className={classes.margin}>Log Feedback</Button>
              </Grid>
            </div>
          </CardActions>
        </Card>
  );
}