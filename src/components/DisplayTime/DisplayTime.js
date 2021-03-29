import React from 'react';
import "./DisplayTime.css";
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
    //backgroundColor: "#9ea130",
    backgroundColor: "#8d359c",
  },
}));

function DisplayTime() {
  const classes = useStyles();

  return (
    <li className="list-style">
      <p>01-01-2021 00:00:00
        <Button variant="contained" size="small" className={classes.margin}>Notify</Button>
        <Button variant="contained" size="small" className={classes.margin}>Log Feedback</Button>
      </p>
    </li>
  );
}

export default DisplayTime;

