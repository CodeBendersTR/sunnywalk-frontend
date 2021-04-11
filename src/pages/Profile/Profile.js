import "./Profile.css";
// import { Menu } from './Menu/Menu';
import React from "react";
import { ProfileForm, UniversalHeader, UniversalDrawer } from "../../components";

function Profile() {
    return (
        <div>
            <UniversalHeader
                ButtonMain="Main"
                ButtonLogin="Login"
                ButtonRegister="Register"
                ButtonUserHome="User Home"
            />
            <UniversalDrawer Greeting="Profile Page" />
            <ProfileForm />
        </div>
    );
}

export default Profile;
