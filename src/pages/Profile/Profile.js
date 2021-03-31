import "./Profile.css";
import { Menu } from "..";
import React from "react";
import {
    AutoCompleteText,
    UkCities,
    WeatherPreferenceSelect,
    NotificationPreferenceSelect,
    SingleSelects,
} from "../../components";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Profile() {
    return (
        <Menu>
            <h1 className="Profile">This is the Profile Page</h1>
            <ul className="Profile">
                <ul>
                    Welcome to your edit profile page, please fill in and confirm any edits you
                    would like to do.
                </ul>
            </ul>
            <ul className="selectTest Profile ">
                Current password
                <TextField
                    style={{ margin: "0px 20px", minWidth: "80px" }}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </ul>
            <ul className="selectTest Profile ">
                New Password
                <TextField
                    style={{ margin: "0px 20px", minWidth: "80px" }}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
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
        </Menu>
    );
}

export default Profile;
