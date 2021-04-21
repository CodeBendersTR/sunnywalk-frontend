import "./UniversalHeader.css";
import { Button } from "@material-ui/core";

function handleClick() {
}

function UniversalHeader(props) {
    return (
        // HeaderMain with sun icon, product name and buttons
        <div className="container">
            <nav className="navbar navbar-collapse navbar-light bg-light fixed-top ">
                <a href="https://github.com/CodeBendersTR">
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
                </a>
                <div className="col-sm-1 col-xs-1 col-md-1 col-lg-1"></div>
                <div className="d-flex justify-content-end">
                    <div style={{ padding: 18 }}>
                    {/*<Button onClick={handleClick}*/}
                    {/*        variant="text"*/}
                    {/*        className="navbar-toggler "*/}
                    {/*        color="default"*/}
                    {/*        type="button"*/}
                    {/*        data-toggle="collapse"*/}
                    {/*        href="./"*/}
                    {/*        alt="Main button"*/}
                    {/*        my={1}*/}
                    {/*        px={2}*/}
                    {/*    >*/}
                    {/*        { props.ButtonMain }*/}
                    {/*    </Button>*/}
                    {/*    <Button onClick={handleClick}*/}
                    {/*        variant="text"*/}
                    {/*        className="primary"*/}
                    {/*        color="default"*/}
                    {/*        href="../Login"*/}
                    {/*        alt="Login button"*/}
                    {/*        my={1}*/}
                    {/*        px={2}*/}
                    {/*    >*/}
                    {/*        { props.ButtonLogin }*/}
                    {/*    </Button>*/}
                    {/*    <Button onClick={handleClick}*/}
                    {/*        variant="text"*/}
                    {/*        color="default"*/}
                    {/*        href="../Register"*/}
                    {/*        alt="Register button"*/}
                    {/*        my={1}*/}
                    {/*        px={2}*/}
                    {/*    >*/}
                    {/*        { props.ButtonRegister }*/}
                    {/*    </Button>*/}
                        {/*<button disabled={!this.state.value} />*/}
                        <Button onClick={handleClick}
                            variant="text"
                            color="default"
                            // href="../Profile"
                            href={props.FirstButton}
                            alt="Profile button"
                            my={1}
                            px={2}
                        >
                            { props.ButtonProfile }
                        </Button>
                        <Button onClick={handleClick}
                            variant="text"
                            color="default"
                            // href="../Home"
                            href={props.SecondButton}
                            alt="Home User button"
                            my={1}
                            px={2}
                        >
                            { props.ButtonUserHome }
                        </Button>
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default UniversalHeader;
