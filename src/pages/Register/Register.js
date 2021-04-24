import "./Register.css";
import { RegisterForm, UniversalDrawer, UniversalHeader } from "../../components";

function Register() {
    return (
        <div>
            <UniversalHeader
                // ButtonMain="Main"
                // ButtonLogin="Login"
                // ButtonRegister="Main"
                // ButtonProfile="Main" FirstButton={"../Main"}
                // ButtonUserHome="Login" SecondButton={"../Login"}

            />
            <UniversalDrawer Greeting="Register Page" ButtonProfile="Main"   FirstButton={"../"}
                                                      ButtonUserHome="Login" SecondButton={"../Login"}/>
            <RegisterForm />
        </div>
    );
}

export default Register;
