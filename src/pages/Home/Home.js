import React from "react";
import "./Home.css";
//import { Menu } from "..";
import { AddResponsiveDrawer } from "../../components";
import { UniversalHeader } from "../../components";

function Home() {
    return (
        <div>
            <UniversalHeader
                // ButtonMain="Main"
                // ButtonLogin="Login"
                // ButtonRegister="Register"
                // ButtonProfile="Main" FirstButton={"../Main"}
                // ButtonUserHome="Profile" SecondButton={"../Profile"}
            />
            <AddResponsiveDrawer Greeting="User Home Page" ButtonProfile="Main" FirstButton={"../"}
                                 ButtonUserHome="Profile" SecondButton={"../Profile"}/>
        </div>
    );
}

export default Home;
