import "./MyMap.css";
import { GoogleMap, UniversalDrawer, UniversalHeader } from "../../components";
import MapIcon from "@material-ui/icons/Map";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import React from "react";
import { GetLatLng, Map, GoogleMap, UniversalDrawer, UniversalHeader, Marker, CurrentLocation } from "../../components";




function MyMap() {
    return (
        <div>
            {/*<UniversalHeader*/}
            {/*    ButtonMain="Main"*/}
            {/*    ButtonLogin="Login"*/}
            {/*    ButtonProfile="Profile"*/}
            {/*    ButtonUserHome="User Home"*/}
            {/*    ButtonRegister="Register"*/}

            {/*/>*/}
            <UniversalDrawer Greeting="My Map"  ListItem1Icon=<DirectionsWalkIcon /> ListItem1="My Favourite Walks"
                                                ListItem2Icon=<MapIcon />            ListItem2="My Map"
                                                ListItem3Icon=<AccountCircleIcon />  ListItem3="Logout"
                                                ButtonProfile="Profile"   FirstButton={"../Profile"}
                                                ButtonUserHome="User Home" SecondButton={"../Home"}
                                                MapView={ <GoogleMap>Your Sunny Walk</GoogleMap> }/>
                    {/*<GoogleMap>Your Sunny Walk</GoogleMap>*/}

        </div>
    );
}

export default MyMap;
