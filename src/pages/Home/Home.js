import React from "react";
import "./Home.css";
//import { Menu } from "..";
import { AddResponsiveDrawer, UniversalHeader, SimpleRating } from "../../components";


function Home() {
    return (
        <div>
            <div class="parent">
                <a href="/../images/UVIGuide.pdf" download rel="noopener noreferrer" target="_blank">
                    Download File                  
                    <img
                            class="image1"
                            src="images/UVIndex.jpg"
                            alt="UV Index ratings"


                        ></img>
                </a>
            </div>          
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
