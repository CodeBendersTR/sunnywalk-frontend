import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            <h1>This is the Main Page</h1>
            <Link exact to="/login">
                Login
            </Link>
        </div>
    );
}

export default Main;
