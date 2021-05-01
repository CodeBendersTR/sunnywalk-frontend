import "./Login.css";
import { LoginForm, UniversalHeader } from "../../components";
import UniversalDrawer from "../../components/UniversalDrawer/UniversalDrawer";
import {} from "@material-ui/core";

function Login() {
    return (
        <div>
            <UniversalDrawer
                Greeting="Login Page"
                ButtonProfile="Main"
                FirstButton={"../"}
                ButtonUserHome="Register"
                SecondButton={"../Register"}
            />
            <LoginForm />
        </div>
    );
}

export default Login;
