import './RegisterForm.css';

import {
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    Typography
} from "@material-ui/core";

function RegisterForm() {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <div className="paper">
                <Typography component="h1" variant="h5">
                    Register
                </Typography>

                <form className="form" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                autoComplete="fname"
                                name="firstName"
                                id="firstName"
                                label="First Name"
                                required
                                fullWidth
                                autoFocus
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                autoComplete="lname"
                                name="lastName"
                                id="lastName"
                                label="Last Name"
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                autoComplete="email"
                                name="email"
                                id="email"
                                label="Email Address"
                                required
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                autoComplete="current-password"
                                name="password"
                                id="password"
                                label="Pasword"
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit"
                        fullWidth
                    >
                        Register
                    </Button>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Log In
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default RegisterForm;