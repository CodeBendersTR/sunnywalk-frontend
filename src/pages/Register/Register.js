import "./Register.css";
import { RegisterForm, RegisterHeader, ResponsiveDrawerReg } from "../../components";

function Register() {
    return (
        <div>
            <RegisterHeader />
                <ResponsiveDrawerReg />
                <RegisterForm />
        </div>
    );
}

export default Register;
