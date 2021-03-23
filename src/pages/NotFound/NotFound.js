import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>This is the NotFound Page</h1>
            <Link exact to="/">
                Main
            </Link>
        </div>
    );
}

export default NotFound;
