import React, {useState} from "react";
import { makeStyles, Grid, Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import getConfig from "../../modules/Config";
import axios from "axios";
import RequestConfirmation from "../RequestConfirmation/RequestConfirmation";


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
}


export default function SimpleCard(props) {
    const classes = useStyles();
    const [notifyResponse, setNotifyResponse] = useState([]);
    const[notifyStatus, setNotifyStatus] = useState("waiting");

    let [time, location, temp, uvi, description] = ["-", "-", "-", "-", "-"];

    if (props.status === "fulfilled") {
        time = props.suggestion.time;
        temp = props.suggestion.temp;
        uvi = props.suggestion.uvi;
        description = props.suggestion.weatherDescription;
    }

    function notifyUser(){
        if (time === "-") {
            return
        }
        let today = new Date();
        const match = /(Today|Tomorrow) at (\d{2}):(\d{2})/.exec(time);
        if (match[1] === "Tomorrow") {
            today.setDate(today.getDate() + 1);
        }

        today.setHours(parseInt(match[2]));
        today.setMinutes(parseInt(match[3]));

        const notifyTime = Math.round(today.getTime() / 1000);

        const sessionId = localStorage.getItem("sessionId");
        let notifyPromise = axios.post(getConfig("backend-url") + "/walk/notify?sessionId=" + sessionId, {"time": notifyTime});

        setNotifyStatus("loading");
        notifyPromise.then(
            (response) => {
                setNotifyResponse(response);
                setNotifyStatus("fulfilled");
                console.log("Success!!");
            }
            ).catch(
            (err) => {
                setNotifyResponse(err.responsive);
                setNotifyStatus("Error");
                console.log("Error!!");
            }
        );
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
                            onClick={notifyUser}
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
                            href="/mymap"
                        >
                            Log Feedback
                        </Button>
                    </Grid>
                </div>
            </CardActions>
          <RequestConfirmation source="notify" status={ notifyStatus } response={ notifyResponse }/>
        </Card>
    );
}
