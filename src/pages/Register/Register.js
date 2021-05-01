import "./Register.css";
import { RegisterForm, UniversalDrawer, UniversalHeader } from "../../components";

function Register() {
    return (
        <div>
            <UniversalDrawer
                Greeting="Register Page"
                ButtonProfile="Main"
                FirstButton={"../"}
                ButtonUserHome="Login"
                SecondButton={"../Login"}
            />
            <RegisterForm />
        </div>
    );
}

export default Register;
