import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { WbSunny } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import {
  Card,
  TextField,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from '@material-ui/core';
import axios from 'axios';
import getConfig from "../../modules/Config";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute"
  },
  actions: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

function AddWalk(props) {

  const [rating, setRating] = useState(0);
  const [addWalkResponse, setAddWalkResponse] = useState([]);
  const [addWalkStatus, setAddWalkStatus] = useState("waiting");

  function handleSubmit() {
    const timeString = document.getElementById("addWalkTime").value;
    const time = new Date(timeString).getTime() / 1000;

    const location = document.getElementById("addWalkLocation").value;
    const locationMatch = /(?<name>.+) \((?<lat>.+),(?<lon>.+)\)/.exec(location);
    const locationName = locationMatch.groups.name;
    const latitude = locationMatch.groups.lat;
    const longitude = locationMatch.groups.lon;

    const addWalkDto = {
      "time": time,
      "locationName": locationName,
      "lat": latitude,
      "lon": longitude,
      "rating": rating
    };
    
    let registerPromise = axios.post(getConfig("backend-url") + "/walk/add/1", addWalkDto);
      setAddWalkStatus("loading");
        registerPromise.then(
            (response) => {
                setAddWalkResponse(response);
                setAddWalkStatus("fulfilled");
            }
        ).catch(
            (err) => {
                setAddWalkResponse(err.response);
                setAddWalkStatus("error");
            }
        );
  }

  const classes = useStyles();
  const date = new Date().toISOString().match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/g); // remove seconds and milliseconds
  return (
    <Card className={classes.root}>
      <CardContent flexDirection="column">
        <Typography variant="h5" component="h2" fontWeight="fontWeightBold">
          Record your sunny walk
        </Typography>
        <div>
          <TextField
            id="addWalkTime"
            label="Walk time"
            type="datetime-local"
            defaultValue={date}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            variant="standard"
            margin="normal"
            name="location"
            id="addWalkLocation"
            label="Location"
            value={props.location.name + " (" + props.location.lat + "," + props.location.lng + ")"}
            defaultValue="(Click on the map for location)"
            fullWidth
            required
            disabled
          />
        </div>
        <Box mb={1} mt={3} borderColor="transparent">
          <Rating id="addWalkRating" icon={<WbSunny fontSize="inherit" />} onChange={(event, newValue) => {setRating(newValue)}} />
        </Box>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="medium" onClick={handleSubmit}>Add Walk</Button>
      </CardActions>
    </Card>
  );
}

export default AddWalk;