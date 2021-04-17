import "./ProfileForm.css";
import React from "react";
import {
    AutoCompleteText,
    UkCities,
    WeatherPreferenceSelect,
    NotificationPreferenceSelect,
    WalkerType,
    SingleSelects,
} from "../../components";

import TextField from "@material-ui/core/TextField";
import { Button, Container, Typography } from "@material-ui/core";

function ProfileForm() {
    return (
        <div>
            <Container className="profile-form-container" component="main" maxWidth="xs">
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        Profile
                    </Typography>
                    <p className="p">Please edit and confirm any changes below.</p>
                    <form className="form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="outlined-password-input"
                            label="Current Password"
                            name="Password"
                            autoComplete="current-password"
                            autoFocus
                            fullWidth
                            required
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="outlined-password-input"
                            label="New Password"
                            name="Password"
                            autoComplete="new-password"
                            autoFocus
                            fullWidth
                            required
                        />
                    <Typography component="h1" variant="h5">
                        Your Preferences
                    </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="UKCities"
                            label="Preferred Location"
                            name="Location"
                            autoFocus
                            fullWidth
                            required
                            autoComplete="address-level1"
                            // AutoCompleteText items={UkCities} //this doesn't work
                            options={UkCities}
                        />
                        <ul className="Profile">
                            <WalkerType></WalkerType>
                        </ul>
                        <ul className="Profile">
                            <NotificationPreferenceSelect></NotificationPreferenceSelect>
                        </ul>
                        {/* <ul className="Profile">
                        <SingleSelects></SingleSelects>
                    </ul> */}
                        <ul className="Profile">
                            <WeatherPreferenceSelect></WeatherPreferenceSelect>
                        </ul>
                        <ul className="Profile">
                            <Button variant="contained">confirm</Button>
                        </ul>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default ProfileForm;
