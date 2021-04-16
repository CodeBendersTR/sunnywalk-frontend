import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: "flex",
        flexWrap: "wrap",
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const WalkerTypeSettings = [
    "Active wheelchair",
    "Electronic wheelchair",
    "Pram",
    "Push walker",
    "Scooter",
    "Skater/Rollerblades",
    "Walker",
    "With Pet(s)",
    "With Family",
    "Other",
];
const NotificationSettings = ["Email", "Web Notification"];
const WeatherPreference = ["Sunny", "Partly Sunny", "Cloudy", "Raining", "Snow", "Windy"];

function getStyles(name, objectName, theme) {
    return {
        fontWeight:
            objectName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function WalkerType() {
    const classes = useStyles();
    const theme = useTheme();
    const [notificationName, setNotificationName] = React.useState([]);

    const handleChange = (event) => {
        setNotificationName(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-notification-label">Walker Type</InputLabel>
                <Select
                    labelId="demo-mutiple-notification-label"
                    id="demo-mutiple-notification"
                    multiple
                    value={notificationName}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {WalkerTypeSettings.map((notification) => (
                        <MenuItem
                            key={notification}
                            value={notification}
                            style={getStyles(notification, notificationName, theme)}
                        >
                            {notification}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

function NotificationPreferenceSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [notificationName, setNotificationName] = React.useState([]);

    const handleChange = (event) => {
        setNotificationName(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-notification-label">Notification</InputLabel>
                <Select
                    labelId="demo-mutiple-notification-label"
                    id="demo-mutiple-notification"
                    multiple
                    value={notificationName}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {NotificationSettings.map((notification) => (
                        <MenuItem
                            key={notification}
                            value={notification}
                            style={getStyles(notification, notificationName, theme)}
                        >
                            {notification}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

function WeatherPreferenceSelect() {
    const classes = useStyles();
    const theme = useTheme();
    const [weatherName, setWeatherName] = React.useState([]);

    const handleChange = (event) => {
        setWeatherName(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-weather-label">Weather</InputLabel>
                <Select
                    labelId="demo-mutiple-weather-label"
                    id="demo-mutiple-weather"
                    multiple
                    value={weatherName}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                >
                    {WeatherPreference.map((weather) => (
                        <MenuItem
                            key={weather}
                            value={weather}
                            style={getStyles(weather, weatherName, theme)}
                        >
                            {weather}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export { WeatherPreferenceSelect, NotificationPreferenceSelect, WalkerType };
