import "./Login.css";
import { LoginForm, UniversalHeader } from "../../components";
import UniversalDrawer from "../../components/UniversalDrawer/UniversalDrawer";
import {  } from "@material-ui/core";

function Login() {
    return (
        <div>
            <UniversalHeader
                ButtonMain="Main"
                ButtonRegister="Register"
                ButtonProfile="Profile"
                ButtonUserHome="User Home"
            />
            <UniversalDrawer Greeting="Login Page" />
            <LoginForm />
        </div>
    );
}

export default Login;
