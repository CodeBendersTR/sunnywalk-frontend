import "./RegisterConfirmation.css";

import { Box, CircularProgress } from "@material-ui/core";


function RegisterConfirmation(props) {

    if (props.status === "waiting") {
        return null;
    } else if (props.status === "loading") {
        return (
            <CircularProgress className="register-confirmation"/>
        );
    } else if (props.status === "fulfilled") {
        return (
            <Box className="register-confirmation" color="success.main">Registration successful. User id: {props.response.data}</Box>
        );
    } else if (props.status === "error") {
        return (
            <Box className="register-confirmation" color="error.main">Registration failed. Reason: {props.response.data}</Box>
        );
    } else {
        return (
            <Box className="register-confirmation" color="error.main">Something is wrong... Status: {props.status}</Box>
        );
    }
}

export default RegisterConfirmation;