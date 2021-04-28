import "./ProfileConfirmation.css";

import { Box, CircularProgress } from "@material-ui/core";


function ProfileConfirmation(props) {
  if (props.status === "waiting") {
    return null;
  } else if (props.status === "loading") {
    return (
      <CircularProgress className="profile-confirmation"/>
    );
  } else if (props.status === "fulfilled") {
    return (
      <Box className="profile-confirmation" color="success.main">{props.response.data}</Box>
    );
  } else if (props.status === "error") {
    return (
      <Box className="profile-confirmation" color="error.main">Updating profile failed. Reason: {props.response.data}</Box>
    );
  } else {
    return (
      <Box className="profile-confirmation" color="error.main">Something is wrong... Status: {props.status}</Box>
    );
  }
}

export default ProfileConfirmation;
