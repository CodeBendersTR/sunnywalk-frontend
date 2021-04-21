import "./Profile.css";
// import { Menu } from './Menu/Menu';
import React from "react";
import { ProfileForm, UniversalHeader, UniversalDrawer } from "../../components";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MapIcon from "@material-ui/icons/Map";

function Profile() {
    return (
        <div>
            <UniversalHeader
                // ButtonMain="Main"
                // ButtonLogin="Login"
                // ButtonRegister="Register"
                //ButtonProfile="Main" SecondButton={"../Home"}
                ButtonUserHome="User Home" SecondButton={"../Home"}

            />
            <UniversalDrawer Greeting="Profile Page"  ListItem1Icon=<DirectionsWalkIcon /> ListItem1="My Favourite Walks"
                                                      ListItem2Icon=<MapIcon />            ListItem2="My Map"
                                                      ListItem3Icon=<AccountCircleIcon />  ListItem3="Logout"/>
            <ProfileForm />
        </div>
    );
}

export default Profile;
