import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <h1>This is the Register Page</h1>
            <Link exact to="/home">
                Home
            </Link>
        </div>
    );
}

export default Register;
