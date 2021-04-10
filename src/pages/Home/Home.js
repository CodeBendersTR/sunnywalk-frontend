import React from "react";
import "./Home.css";
//import { Menu } from "..";
import { AddResponsiveDrawer } from "../../components";
import { HomeHeader } from "../../components";

function Home() {
    return (
            <div>
              <HomeHeader />
              < AddResponsiveDrawer Greeting="User Home Page"/>
            </div>
    );
}

export default Home;
