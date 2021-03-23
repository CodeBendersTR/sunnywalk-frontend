import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>This is the Login Page</h1>
            <Link exact to="/register">
                Register
            </Link>
            <br />
            <Link exact to="/home">
                Home
            </Link>
        </div>
    );
}

export default Login;