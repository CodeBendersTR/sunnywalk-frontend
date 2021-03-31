import "./Profile.css";
import { Menu } from "..";
import React from "react";
import {AutoCompleteText, UkCities} from '../../components';
import {Select, MenuItem} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Profile(){
        return(        
                <Menu>
                    <h1 className="Profile">This is the Profile Page</h1>
                    <ul className="Profile">
                        <ul>Welcome to your edit profile page, please fill in and confirm any edits you would like to do.</ul>
                    </ul>
                    <ul className="selectTest Profile ">Current password 
                    <TextField 
                    style={{margin:"0px 20px",minWidth:"80px"}}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    /></ul> 
                    <ul className="selectTest Profile ">New Password 
                    <TextField 
                    style={{margin:"0px 20px",minWidth:"80px"}}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    /></ul> 
                    <ul className="Profile">Preferred location 
                            <AutoCompleteText items={UkCities}/>
                    </ul>
                    <ul className="Profile">notification settings  
                            <Select style={{margin:"0px 20px",minWidth:"80px"}}>
                                    <MenuItem value={"Email"}>Email</MenuItem>
                                    <MenuItem value={"Web Notification"}>Web notification</MenuItem>
                            </Select>
                    </ul>
                    <ul className="Profile">Automatically update walks
                            <Select style={{margin:"0px 20px",minWidth:"80px"}}>
                                    <MenuItem value={"Yes"}>Yes</MenuItem>
                                    <MenuItem value={"No"}>No</MenuItem>
                            </Select>
                    </ul>
                    <ul className="Profile">Weather preference
                            <Select style={{margin:"0px 20px",minWidth:"80px"}}>
                                    <MenuItem value={"Sunny"}>Sunny</MenuItem>
                                    <MenuItem value={"Cloudy"}>Cloudy</MenuItem>
                                    <MenuItem value={"Raining"}>Raining</MenuItem>
                                    <MenuItem value={"Snow"}>Snow</MenuItem>
                                    <MenuItem value={"Windy"}>Windy</MenuItem>
                            </Select>
                    </ul>
                    <ul className="Profile">
                    <Button variant="contained">confirm</Button>
                    </ul>
                </Menu>
                
                );
};

export default Profile;