import "./Login.css";
import { LoginForm, LoginHeader } from "../../components";
import LoginResponsiveDrawer from "../../components/LoginResponsiveDrawer/LoginResponsiveDrawer";
import {Container} from "@material-ui/core";

function Login() {
    return (
      <div>
        <LoginHeader />
        <LoginResponsiveDrawer />
        <LoginForm />
      </div>
    )
}

export default Login;
