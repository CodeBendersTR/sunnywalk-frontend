import "./Login.css";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components";

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

            <LoginForm />
        </div>
    );
}

export default Login;
