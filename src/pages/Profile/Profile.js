import "./Profile.css";
// import { Menu } from './Menu/Menu';
import React from "react";
import {
    ProfileForm,
    RegisterHeader,
    UniversalDrawer,
} from "../../components";

function Profile() {
    return (
        <div>
            <RegisterHeader />
                < UniversalDrawer Greeting="Profile Page" />
                <ProfileForm />
        </div>
    );
}

export default Profile;
