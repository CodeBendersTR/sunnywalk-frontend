import "./WalkConfirmation.css";

import { Box, CircularProgress } from "@material-ui/core";


function WalkConfirmation(props) {
  if (props.status === "waiting") {
    return null;
  } else if (props.status === "loading") {
    return (
      <CircularProgress className="walk-confirmation"/>
    );
  } else if (props.status === "fulfilled") {
    return (
      <Box className="walk-confirmation" color="success.main">{props.response.data}</Box>
    );
  } else if (props.status === "error") {
    return (
      <Box className="walk-confirmation" color="error.main">Adding walk failed. Reason: {props.response.data}</Box>
    );
  } else {
    return (
      <Box className="walk-confirmation" color="error.main">Something is wrong... Status: {props.status}</Box>
    );
  }
}

export default WalkConfirmation;
