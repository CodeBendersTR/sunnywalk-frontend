import React from 'react';
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
            label={props.location.lat + "|" + props.location.lng}
            value={props.location.name}
            defaultValue="(Click on the map for location)"
            fullWidth
            required
            disabled
          />
        </div>
        <Box mb={1} mt={3} borderColor="transparent">
          <Rating icon={<WbSunny fontSize="inherit" />} />
        </Box>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="medium">Add Walk</Button>
      </CardActions>
    </Card>
  );
}

export default AddWalk;