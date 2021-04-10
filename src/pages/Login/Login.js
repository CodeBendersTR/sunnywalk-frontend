import "./Login.css";
import { LoginForm, LoginHeader } from "../../components";
import UniversalDrawer from "../../components/UniversalDrawer/UniversalDrawer";
import {Container} from "@material-ui/core";

function Login() {
    return (
      <div>
        <LoginHeader />
        < UniversalDrawer Greeting="Login Page" />
        <LoginForm />
      </div>
    )
}

export default Login;
