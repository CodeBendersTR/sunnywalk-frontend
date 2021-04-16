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

function SignIn() {
    return (
        <Container className="login-form-container" component="main" maxWidth="xs">
            <CssBaseline />

            <div className="paper">

                <Typography component="h1" variant="h5">
                    Login
                </Typography>

                <form className="form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        id="email"
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
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color= 'default'
                        className="submit"
                        href="../home"
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
                </form>
            </div>
        </Container>
    );
}

export default SignIn;
