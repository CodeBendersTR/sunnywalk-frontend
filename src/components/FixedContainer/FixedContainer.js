import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography
                    component="div"
                    style={{
                        height: "400px",
                        width: "800px",
                        marginTop: 75,
                        marginLeft: 75,
                    }}
                />
            </Container>
        </React.Fragment>
    );
}

export default FixedContainer;
