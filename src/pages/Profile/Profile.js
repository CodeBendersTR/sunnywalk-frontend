import "./Profile.css";
import { Menu } from "..";
import React from "react";
import AutoCompleteText from '../../components/AutoCompleteText'

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
                <ul>User name</ul> 
                <ul>Location</ul>
                <ul>notification settings</ul>
                <ul>Automatically update walks</ul>
                <ul>Weather preference</ul>
                <ul>Route type</ul>
                <button onClick={()=>this.toggleIsHidden()}>toggle</button>
                {this.state.isHidden && this.props.text}
                <div className="Profile-Component">
                    <AutoCompleteText />
                </div>
            </Menu>
            );
    }
}

