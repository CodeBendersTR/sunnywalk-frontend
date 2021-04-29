import "./RequestConfirmation.css";

import { Box, CircularProgress } from "@material-ui/core";


function RequestConfirmation(props) {
    if (props.status === "waiting") {
        return null;
    } else if (props.status === "loading") {
        return (
            <CircularProgress className="request-confirmation"/>
        );
    }

    let color = "error.main";
    let message = "Unknown error";

    if (props.source === "register") {
        if (props.status === "fulfilled") {
            color = "success.main";
            message = "Registration successful. User id: " + props.response.data;
        } else {
            color = "error.main";
            message = "Registration failed";
        }
    } else if (props.source === "addWalk") {
        if (props.status === "fulfilled") {
            color = "success.main";
            message = "Walk added successfully";
        } else {
            color = "error.main";
            message = "Could not add walk";
        }
    } else if (props.source === "login") {
      if (props.status === "fulfilled") {
        color = "success.main";
        message = "Login successful. Redirecting to User Home page...";
      } else {
        color = "error.main";
        message = "Login failed";
      }
    } else if (props.source === "profile") {
        if (props.status === "fulfilled") {
          color = "success.main";
          message = "Profile updated successfully";
        } else {
          color = "error.main";
          message = "Profile not updated";
        }
    }

    return (
        <Box className="request-confirmation" color={color}>
            {message}
        </Box>
    );
}

export default RequestConfirmation;
