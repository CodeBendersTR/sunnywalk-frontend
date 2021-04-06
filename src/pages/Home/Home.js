import React from "react";
import "./Home.css";
//import { Menu } from "..";
import AddResponsiveDrawer from "../../components/AddResponsiveDrawer/AddResponsiveDrawer";
import { HomeHeader } from "../../components";

function Home() {
    return (
            <div>
              <HomeHeader />
              <AddResponsiveDrawer/>
            </div>
    );
}

export default Home;
