import "./MainHeader.css";
import { Button } from "@material-ui/core";

function MainHeader() {
    return (
        // HeaderMain with sun icon, product name and two buttons
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 px-0 h1">
                <img
                    src="images/sun.icon.gif"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="sun icon"
                ></img>
                SUNNY WALK
            </span>
            <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
            <div className="d-flex justify-content-end">
                <div style={{ padding: 18 }}>
                    <Button
                        variant="outlined"
                        className="primary"
                        href="../Home"
                        alt="Home button, blue"
                        my={1}
                        px={2}
                    >
                        Log In
                    </Button>
                    <Button
                        variant=""
                        color="link"
                        href="../Register"
                        alt="Register button, blue"
                        my={1}
                        px={2}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default MainHeader;
