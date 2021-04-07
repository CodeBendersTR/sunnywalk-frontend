import "./Profile.css";
// import { Menu } from './Menu/Menu';
import React from "react";
import {
    ProfileForm,
    RegisterHeader,
    ResponsiveDrawerReg,
} from "../../components";

function Profile() {
    return (
        <div>
            <RegisterHeader />
                <ResponsiveDrawerReg />
                <ProfileForm />
        </div>
    );
}

export default Profile;
