import "./ProfileForm.css";
import React, {useState} from "react";
import {
    UkCities,
    WeatherPreferenceSelect,
    NotificationPreferenceSelect,
    WalkerType,
} from "../../components";

import TextField from "@material-ui/core/TextField";
import { Button, Container, Typography } from "@material-ui/core";

import getConfig from "../../modules/Config";
import axios from "axios";
import { RequestConfirmation } from "../../components";


function ProfileForm() {
    const [profileResponse, setProfileResponse] = useState([]);
    const [profileStatus, setProfileStatus] = useState("waiting");
    //Function to store user data in the database
    function handleSubmit() {

      const profile = {
        currentPassword: document.getElementById("profileCurrentPassword").value,
            newPassword: document.getElementById("profileNewPassword").value,
               location: document.getElementById("profileLocation").value,
               userType: document.getElementById("demo-mutiple-notification").textContent,
           notification: document.getElementById("demo-mutiple-notification").textContent,
                weather: document.getElementById("demo-mutiple-weather").textContent

      };
      const sessionId = "?sessionId=" + localStorage.getItem("sessionId");
      console.log(sessionId);
      let profilePromise = axios.put(getConfig("backend-url") + "/user/profile/" + sessionId, profile);

      setProfileStatus("loading");
      profilePromise.then(
          (response) => {
              setProfileResponse(response);
              setProfileStatus("fulfilled");
          }
      ).catch(
        (err) => {
            setProfileResponse(err.response);
            setProfileStatus("error");
        }
      );
    }

    return (
        <div>
            <Container className="profile-form-container" component="main" maxWidth="xs">
              <RequestConfirmation status={ profileStatus } response={profileResponse}/>
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        Profile
                    </Typography>
                    <p className="p">Please edit and confirm any changes below.</p>
                    <form className="form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="profileCurrentPassword"
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
                            id="profileNewPassword"
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
                            id="profileLocation"
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
                            <WalkerType ></WalkerType>
                        </ul>
                        <ul className="Profile">
                            <NotificationPreferenceSelect ></NotificationPreferenceSelect>
                        </ul>
                        <ul className="Profile">
                            <WeatherPreferenceSelect ></WeatherPreferenceSelect>
                        </ul>
                        <ul className="Profile">
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                            >
                                confirm
                            </Button>
                        </ul>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default ProfileForm;
