import "./UniversalHeader.css";
import { Button } from "@material-ui/core";

function UniversalHeader(props) {
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
                <Button onClick="complete()"
                        variant="text" // can't use outline until figure out how to ignore those not in use
                        className="primary"
                        href="./"
                        alt="Main button, blue"
                        my={1}
                        px={2}
                    >
                        { props.ButtonMain }
                    </Button>
                    <Button onClick="complete()"
                        variant="text"
                        className="primary"
                        href="../Login"
                        alt="Login button, blue"
                        my={1}
                        px={2}
                    >
                        { props.ButtonLogin }
                    </Button>
                    <Button onClick="complete()"
                        variant="text"
                        color="primary"
                        href="../Register"
                        alt="Register button, blue"
                        my={1}
                        px={2}
                    >
                        { props.ButtonRegister }
                    </Button>
                    <Button onClick="complete()"
                        variant="text"
                        color="primary"
                        href="../Profile"
                        alt="Profile button, blue"
                        my={1}
                        px={2}
                    >
                        { props.ButtonProfile }
                    </Button>
                    <Button onClick="complete()"
                        variant="text"
                        color="primary"
                        href="../Home"
                        alt="Home User button, blue"
                        my={1}
                        px={2}
                    >
                        { props.ButtonUserHome }
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default UniversalHeader;
