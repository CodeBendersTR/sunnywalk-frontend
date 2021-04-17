import "./MyMap.css";
import { FixedContainer, MyGoogleMap, UniversalDrawer, UniversalHeader } from "../../components";


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
                {/* <FixedContainer> */}
                    <MyGoogleMap>May Your Sunny Walk</MyGoogleMap>
                {/* </FixedContainer> */}
        </div>
    );
}

export default MyMap;