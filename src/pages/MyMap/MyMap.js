import "./MyMap.css";
import { GetLatLng, Map, GoogleMap, UniversalDrawer, UniversalHeader, Marker, CurrentLocation } from "../../components";



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
                    <GoogleMap />
                    
        </div>
    );
}

export default MyMap;