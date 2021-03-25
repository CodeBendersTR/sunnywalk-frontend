import "./Profile.css";
import { Menu } from "..";
import React, {useState} from "react";
import {AutoCompleteText, UkCities} from '../../components';
import {Select, MenuItem, makeStyles} from "@material-ui/core"


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
const [value,setValue] = useState("");
const handleChange = e => setValue(e.target.value);
            return(        
            <Menu>
                <h1>This is the Profile Page</h1>
                <ul>
                    <li>Welcome to your edit profile page, please fill in and confirm any edits you would like to do.</li>
                </ul>
                <ul>User name <input></input></ul> 
                <ul>Change Password <input></input></ul> 
                <ul>Preferred location 
                        <AutoCompleteText items={UkCities}/>
                </ul>
                <ul>notification settings  
                        <Select onChange={this.handleChange}>
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
                <p>you have secected </p>
                {this.state.isHidden && this.props.text}
                
            </Menu>
            );
    }
}

