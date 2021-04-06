import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: "",
        name: "hai",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="choice-native-simple">Auto Update</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: "age",
                        id: "age-native-simple",
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={"Yes"}>Yes</option>
                    <option value={"No"}>No</option>
                </Select>
            </FormControl>
        </div>
    );
}
