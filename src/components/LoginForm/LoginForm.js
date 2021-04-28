import "./LoginForm.css";


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
import { useHistory } from 'react-router-dom';

function SignIn() {
    const history = useHistory();
    const [loginResponse, setLoginResponse] = useState([]);
    const [loginStatus, setLoginStatus] = useState("waiting");
    function handleSubmit() {
        const loginDto = {
            "email" : document.getElementById("loginEmail").value,
            "password" : document.getElementById("loginPassword").value
        };
    
        let registerPromise = axios.post(getConfig("backend-url") + "/auth/login", loginDto);
        setLoginStatus("loading");
        registerPromise.then(
            (response) => {
                setLoginResponse(response);
                setLoginStatus("fulfilled");
                localStorage.setItem("sessionId", response.data);
                history.push("/home");
            }
        ).catch(
            (err) => {
                setLoginResponse(err.response);
                setLoginStatus("error");
            }
        );
    }
    return (
        <Container className="login-form-container" component="main" maxWidth="xs">
            <CssBaseline />
            <RequestConfirmation source="login" status={ loginStatus } response={loginResponse}/>
            <div className="paper">

                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    id="loginEmail"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    fullWidth
                    required
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="loginPassword"
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color= 'default'
                    className="submit"
                    onClick={handleSubmit}
                >
                    LogIn
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            <br />  Forgot password?
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Link href="/register" variant="body2">
                            <br /> No account yet? Register
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default SignIn;
