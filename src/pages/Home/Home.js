import "./Home.css";
import { Menu } from "..";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

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
                    <displaytime>00:00:00</displaytime>
                    <Button variant="contained" className="notify-user button">Notify</Button>
                    <Button variant="contained">Log Feedback</Button>
                  </li>
                  <li>
                    <displaytime>00:00:00</displaytime>
                    <Button variant="contained" className="button">Notify</Button>
                    <Button variant="contained">Log Feedback</Button>
                  </li>
                  <li>
                    <displaytime>00:00:00</displaytime>
                    <Button variant="contained" className="button">Notify</Button>
                    <Button variant="contained">Log Feedback</Button>
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
