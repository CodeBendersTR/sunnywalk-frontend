import React from 'react';
import { makeStyles, GridList, GridListTile, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    justifyContent: "center",
    backgroundColor: "#e8e3e3",
  },
  bullet: {
    //display: 'inline-block',
    //margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 5,
  },
  margin: {
    //margin: theme.spacing(1),
    //marginLeft: theme.spacing(4),
    backgroundColor: "#e8b633",
    //backgroundColor: "#8d359c",

  },
}));

function dispButton(){
  window.alert ("Hello there!!");
}

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Get your sunshine at
            </Typography>
            <br />
             <p text-align="center">
                { props.dispTime }
             </p>
          </CardContent>
          <CardActions classes={{root: classes.root}}>
            <div>
              <Typography className={classes.pos} color="textSecondary">
                Would you like a notification?
              </Typography>
              <Button text-align= "center" onClick={dispButton} variant="contained" size="small" className={classes.margin}>Notify</Button>
              <Typography className={classes.pos} color="textSecondary">
                Tell us how your walk was!
              </Typography>
              <Button onClick={dispButton} variant="contained" size="small" className={classes.margin}>Log Feedback</Button>
            </div>
          </CardActions>
        </Card>
  );
}
