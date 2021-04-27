import React from "react";
import { makeStyles, Grid, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 300,
        justifyContent: "center",
        backgroundColor: "#e3e1dc",
    },

    margin: {
        backgroundColor: "#e8b633",
        fontSize: 12,
    },

    pos: {
        marginBottom: 12,

    }
}));

function dispButton() {
    //window.alert("Hello there!!");
}

export default function SimpleCard(props) {
    const classes = useStyles();

    let [time, temp, uvi, description] = ["-", "-", "-", "-"];
    if (props.status === "fulfilled") {
        time = props.suggestion.time;
        temp = props.suggestion.temp;
        uvi = props.suggestion.uvi;
        description = props.suggestion.weatherDescription;
    }

    return (
        <Card>
            <CardContent className={classes.root}>
                <Typography className={classes.pos} color="textSecondary">
                    <Grid container justify="center">
                        Get your sunshine&nbsp;<strong>{time}</strong>
                    </Grid>
                    <br />
                    <Grid container justify="center">
                        Temp will be&nbsp;<strong>{temp}° C</strong>
                    </Grid>
                    <Grid container justify="center">
                        The UV Index is&nbsp;<strong>{uvi}</strong>
                    </Grid>
                    <br />
                    <Grid container justify="center">
                        Weather will be&nbsp;<strong>{description}</strong>
                    </Grid>
                    
                </Typography>
            </CardContent>
            <CardActions className={classes.root}>
                <div>
                    <Typography color="textSecondary">Would you like a notification?</Typography>
                    <Grid container justify="center">
                        <Button
                            onClick={dispButton}
                            variant="contained"
                            size="small"
                            className={classes.margin}
                        >
                            Notify
                        </Button>
                    </Grid>
                    <br/>
                    <Typography color="textSecondary">Tell us how your walk was!</Typography>
                    <Grid container justify="center">
                        <Button
                            onClick={dispButton}
                            variant="contained"
                            size="small"
                            className={classes.margin}
                        >
                            Log Feedback
                        </Button>
                    </Grid>
                </div>
            </CardActions>
        </Card>
    );
}
