import React from 'react';
import "./DisplayTime.css";
import CardHome from "../CardHome/CardHome";
import { makeStyles, Button  } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(4),
    backgroundColor: "#e8b633",
    //backgroundColor: "#8d359c",
  },
}));

function dispButton(){
  window.alert ("Hello there!!");
}

function DisplayTime(props) {
  const classes = useStyles();

  return (
    <li className="list-style">
      <p>
        {/*{ props.dispTime }
        <Button onClick={dispButton} variant="contained" size="small" className={classes.margin}>Notify</Button>
        <Button onClick={dispButton} variant="contained" size="small" className={classes.margin}>Log Feedback</Button>
        */}
        <CardHome />
      </p>
    </li>
  );
}

export default DisplayTime;

