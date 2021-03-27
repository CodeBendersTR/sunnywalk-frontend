import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import "./DisplayTime.css";
import Button from "@material-ui/core/Button";

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
}));

function DisplayTime(props) {
  const classes = useStyles();

  return (
    <li className="list-style">
      <TextField

        label="Next Best Time"

        defaultValue="01-01-2021 00:00:00"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <button className="button">Notify</button>
      <button>Log Feedback</button>
    </li>

  );
}

export default DisplayTime;

