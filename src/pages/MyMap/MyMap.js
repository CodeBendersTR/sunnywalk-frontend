import "./MyMap.css";
import { Map, GoogleMap, UniversalDrawer, UniversalHeader } from "../../components";


function MyMap() {
    return (
        <div>
            <UniversalHeader
                ButtonMain="Main"
                ButtonLogin="Login"
                ButtonProfile="Profile"
                ButtonUserHome="User Home"
                ButtonRegister="Register"
                
            />
            <UniversalDrawer Greeting="My Map" />
                    <GoogleMap>Your Sunny Walk</GoogleMap>
        </div>
    );
}

export default MyMap;