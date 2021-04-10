import "./Register.css";
import { RegisterForm, RegisterHeader, UniversalDrawer } from "../../components";

function Register() {
    return (
        <div>
            <RegisterHeader />
                < UniversalDrawer Greeting="Register Page" />
                <RegisterForm />
        </div>
    );
}

export default Register;
