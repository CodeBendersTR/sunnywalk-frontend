import "./Register.css";
import { RegisterForm, UniversalDrawer, UniversalHeader } from "../../components";

function Register() {
    return (
        <div>
            <UniversalHeader
                ButtonMain="Main"
                ButtonLogin="Login"
                ButtonProfile="Profile"
                ButtonUserHome="User Home"
                ButtonRegister="Register"
                
            />
            <UniversalDrawer Greeting="Register Page" />
            <RegisterForm />
        </div>
    );
}

export default Register;
