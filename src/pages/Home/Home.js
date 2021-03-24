import "./Home.css";
import { Menu } from "..";
import {Link} from "react-router-dom";
//import Button from 'muicss/lib/react/button';

//const logo = require('/public/logo.jpg');

function Home() {
    return (
        <Menu>
            <header>
              <h1 className="text_align">User Home</h1>
              <h3>Welcome "User Name"</h3>
              <h4>Today's best times to take a walk</h4>
            </header>
            <main>
              <div>
                <ul>
                  <li>
                    <p></p>
                    <displaytime>00:00:00</displaytime>
                    <button className="notify-user">Notify</button>
                    <button>Log Feedback</button>
                  </li>
                  <li>
                    <p></p>
                    <displaytime>00:00:00</displaytime>
                    <button>Notify</button>
                    <button>Log Feedback</button>
                  </li>
                  <li>
                    <p></p>
                    <displaytime>00:00:00</displaytime>
                    <button>Notify</button>
                    <button>Log Feedback</button>
                  </li>
                </ul>
              </div>
            </main>
            <Link exact to="/main">
              Logout
            </Link>
        </Menu>
    );
}

export default Home;
