import "./Profile.css";
import { Menu } from "..";
import React from "react";
import {AutoCompleteText, UkCities} from '../../components';
import {Select, MenuItem, FormControl, InputLabel, makeStyles} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({FormControl:{minWidth: 100}}));

export default class Profile extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                    isHidden: false,
            }
    }

    toggleIsHidden(){
            this.setState((currentState) => ({
                    isHidden: !currentState.isHidden, 
            }));
    }
    render(){
            return(        
            <Menu>
                <h1>This is the Profile Page</h1>
                <ul>
                    <li>Welcome to your edit profile page, please fill in and confirm any edits you would like to do.</li>
                </ul>
                <ul>Change Password 
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                /></ul> 
                <ul>Preferred location 
                        <AutoCompleteText items={UkCities}/>
                </ul>
                <ul>notification settings  
                        <Select>
                                <MenuItem value={"Email"}>Email</MenuItem>
                                <MenuItem value={"Web Notification"}>Web notification</MenuItem>
                        </Select>
                </ul>
                <ul>Automatically update walks
                        <Select>
                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                <MenuItem value={"No"}>No</MenuItem>
                        </Select>
                </ul>
                <ul>Weather preference
                        <Select>
                                <MenuItem value={"Sunny"}>Sunny</MenuItem>
                                <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
                                <MenuItem value={"Raining"}>Raining</MenuItem>
                                <MenuItem value={"Snow"}>Snow</MenuItem>
                                <MenuItem value={"Windy"}>Windy</MenuItem>
                        </Select>
                </ul>
                {this.state.isHidden && this.props.text}
                <Button variant="contained">confirm</Button>
            </Menu>
            );
    }
}

