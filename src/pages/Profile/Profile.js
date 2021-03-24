import "./Profile.css";
import { Menu } from "..";
import React from "react";
import {AutoCompleteText, UkCities} from '../../components';

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
                <ul>User name <input></input></ul> 
                <ul>Location 
                        <AutoCompleteText items={UkCities}/>
                </ul>
                <ul>notification settings</ul>
                <ul>Automatically update walks</ul>
                <ul>Weather preference</ul>
                <ul>Route type</ul>
                {this.state.isHidden && this.props.text}
                
            </Menu>
            );
    }
}

