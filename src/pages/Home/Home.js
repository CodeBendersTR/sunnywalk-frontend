import React from "react";
import "./Home.css";
import { Menu } from "..";
import AddResponsiveDrawer from "../../components/AddResponsiveDrawer/AddResponsiveDrawer";

function Home() {
    return (
        <Menu>
            <header>
              <AddResponsiveDrawer/>
            </header>
            <main>
            </main>
        </Menu>
    );
}

export default Home;
