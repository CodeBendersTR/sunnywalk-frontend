import React from "react";
import "./Home.css";
//import { Menu } from "..";
import { AddResponsiveDrawer } from "../../components";
import { UniversalHeader } from "../../components";

function Home() {
    return (
            <div>
              <UniversalHeader ButtonMain="Main" ButtonLogin="Login" ButtonRegister="Register" ButtonProfile="Profile" />
              < AddResponsiveDrawer Greeting="User Home Page"/>
            </div>
    );
}

export default Home;
