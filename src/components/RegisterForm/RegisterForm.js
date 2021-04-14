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

function RegisterForm() {
    return (
        <Container className="register-form-container" component="main" maxWidth="xs">
            <CssBaseline />

            <div className="paper">
                <Typography component="h1" variant="h5">
                    Register Here
                </Typography>

                <form className="form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        autoComplete="fname"
                        name="firstName"
                        id="firstName"
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
                        id="lastName"
                        label="Last Name"
                        required
                        fullWidth
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        autoComplete="email"
                        name="email"
                        id="email"
                        label="Email Address"
                        required
                        fullWidth
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        autoComplete="current-password"
                        name="password"
                        id="password"
                        label="Pasword"
                        required
                        fullWidth
                    />

                    <Button
                        type="submit"
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
                </form>
            </div>
        </Container>
    );
}

export default RegisterForm;
