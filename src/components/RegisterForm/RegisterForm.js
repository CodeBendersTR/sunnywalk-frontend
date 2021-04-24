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
import { RegisterConfirmation } from "../../components";



function RegisterForm() {
    const [registerResponse, setRegisterResponse] = useState([]);
    const [registerStatus, setRegisterStatus] = useState("waiting");
    function handleSubmit() {
        
        class RegisterDto {
            constructor(firstName, lastName, email, password) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.email = email;
                this.password = password;
            }
        }
    
    
        const firstName = document.getElementById("registerFirstName").value;
        const lastName = document.getElementById("registerLastName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
    
        const registerDto = new RegisterDto(firstName, lastName, email, password);
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
            <RegisterConfirmation status={registerStatus} response={registerResponse}/>
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
                    autoComplete="email"
                    name="email"
                    id="registerEmail"
                    label="Email Address"
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
                        <Link href="/login" variant="body2">
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
