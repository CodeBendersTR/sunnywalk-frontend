import React from "react";
import "./Home.css";
import { Menu } from "..";
import {Link} from "react-router-dom";
import DisplayTime from "../../components/DisplayTime/DisplayTime";
import GetButton from "../../components/GetButton/GetButton";
import TaskBar from "../../components/TaskBar/TaskBar";
import AddDrawer from "../../components/AddDrawer/AddDrawer";

function Home() {
    return (
        <Menu>
            <header>
              <h2 className="text_align">User Home</h2>

              <AddDrawer/>
              <h4>Today's best times to take a walk</h4>
            </header>
            <main>
              <div>
                <ul>
                      <DisplayTime buttonLabel={ "Notify" }/>
                      <p></p>
                  <li>
                    <text>00:00:00</text>
                    <GetButton variant="contained" className="button">Notify</GetButton>
                    <GetButton variant="contained" className="button">Log Feedback</GetButton>
                    <p></p>
                  </li>
                  <li>
                    <text>00:00:00</text>
                    <GetButton variant="contained" className="button">Notify</GetButton>
                    <GetButton variant="contained">Log Feedback</GetButton>
                  </li>
                </ul>
              </div>
            </main>
        </Menu>
    );
}

export default Home;
