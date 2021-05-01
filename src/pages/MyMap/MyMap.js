import "./MyMap.css";
import { GoogleMap, UniversalDrawer } from "../../components";
import MapIcon from "@material-ui/icons/Map";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import React from "react";
// import { GetLatLng, Map, Marker, CurrentLocation } from "../../components";

function MyMap() {
    return (
        <div className="ud">
            <UniversalDrawer
                Greeting="My Map"
                ListItem1Icon=<DirectionsWalkIcon />
                ListItem1="My Favourite Walks"
                ListItem2Icon=<MapIcon />
                ListItem2="Refresh Map"
                ListItem3Icon=<AccountCircleIcon />
                ListItem3="Logout"
                ButtonProfile="Profile"
                FirstButton={"../Profile"}
                ButtonUserHome="User"
                SecondButton={"../Home"}
                ButtonMain="Main"
                ThirdButton={"../"}
                MapView={<GoogleMap>Your Sunny Walk</GoogleMap>}
            />
        </div>
    );
}

export default MyMap;
