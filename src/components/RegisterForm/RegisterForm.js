import "./RegisterForm.css";

import {
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography,
} from "@material-ui/core";

import getConfig from "../../modules/Config";
import axios from "axios";
import { useState } from 'react';
import { RequestConfirmation } from "../../components";



function RegisterForm() {
    const [registerResponse, setRegisterResponse] = useState([]);
    const [registerStatus, setRegisterStatus] = useState("waiting");
    function handleSubmit() {
        const registerDto = {
            "firstName" : document.getElementById("registerFirstName").value,
            "lastName" : document.getElementById("registerLastName").value,
            "city" : document.getElementById("registerCity").value,
            "email" : document.getElementById("registerEmail").value,
            "password" : document.getElementById("registerPassword").value
        };
    
        let registerPromise = axios.post(getConfig("backend-url") + "/user/register", registerDto);
        setRegisterStatus("loading");
        registerPromise.then(
            (response) => {
                setRegisterResponse(response);
                setRegisterStatus("fulfilled");
            }
        ).catch(
            (err) => {
                setRegisterResponse(err.response);
                setRegisterStatus("error");
            }
        );
    }


    return (
        <Container className="register-form-container" component="main" maxWidth="xs">
            <CssBaseline />
            <RequestConfirmation source="register" status={registerStatus} response={registerResponse}/>
            <div className="paper">
                <Typography component="h1" variant="h5">
                    Register
                </Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    autoComplete="fname"
                    name="firstName"
                    id="registerFirstName"
                    label="First Name"
                    required
                    fullWidth
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    autoComplete="lname"
                    name="lastName"
                    id="registerLastName"
                    label="Last Name"
                    required
                    fullWidth
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    autoComplete="city"
                    name="city"
                    id="registerCity"
                    label="City (example: Harrow)"
                    required
                    fullWidth
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    autoComplete="email"
                    name="email"
                    id="registerEmail"
                    label="Email Address"
                    type="email"
                    required
                    fullWidth
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    autoComplete="current-password"
                    name="password"
                    id="registerPassword"
                    label="Password"
                    type="password"
                    required
                    fullWidth
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="inherit"
                    className="submit"
                    fullWidth
                >
                    Register
                </Button>

                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/Login" variant="body2">
                            <br />
                            Already have an account? Login
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default RegisterForm;
