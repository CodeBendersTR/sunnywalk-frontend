import "./Register.css";

import { RegisterForm } from '../../components';

import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <h1>This is the Register Page</h1>
            <Link exact to="/home">
                Home
            </Link>

            <RegisterForm />
        </div>
    );
}

export default Register;
