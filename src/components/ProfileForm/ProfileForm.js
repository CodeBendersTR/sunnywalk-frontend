import "./ProfileForm.css";
import React from "react";
import {
    AutoCompleteText,
    UkCities,
    WeatherPreferenceSelect,
    NotificationPreferenceSelect,
    SingleSelects,
} from "../../components";

import TextField from "@material-ui/core/TextField";
import { Button, Container } from "@material-ui/core";

function ProfileForm() {
    return (
        <div>
            <Container className="profile-form-container" component="main" maxWidth="xs">
                    <h1 className="Profile">Your Sunny Walk Profile</h1>
                        <p>Please edit and confirm any changes below.</p>

                    <ul className="selectTest Profile ">
                        Current password
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            
                        />
                    </ul>
                    <ul className="selectTest Profile ">
                        New Password
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                        />
                    </ul>
                    <ul className="Profile">
                        Preferred location
                        <AutoCompleteText items={UkCities} />
                    </ul>
                    <ul className="Profile">
                        <NotificationPreferenceSelect></NotificationPreferenceSelect>
                    </ul>
                    <ul className="Profile">
                        <SingleSelects></SingleSelects>
                    </ul>
                    <ul className="Profile">
                        <WeatherPreferenceSelect></WeatherPreferenceSelect>
                    </ul>
                    <ul className="Profile">
                        <Button variant="contained">confirm</Button>
                    </ul>
            </Container>
        </div>
    );
}

export default ProfileForm;
