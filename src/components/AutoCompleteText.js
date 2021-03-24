import React from 'react';

export default class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            'David',
            'Danny',
            'Sara',
            'Jame',
        ];
        //Javascript object. When created have a empty suggestions array.
        this.state = {
            suggestions: [],
        };
    }
    //when the text in the box has changed get its value 
    onTextChanged = (e) =>{
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            //Case insensitive regex to match what the user has entered to our array.
            const regex = new RegExp(`^${value}`, 'i');
            //update suggestions by using a sorted filter .
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        //return updated suggestions.
        this.setState(()=> ({suggestions}));
    }
    renderSuggestions(){
        const{suggestions} = this.state;
        //if theres no input show nothing.
        if(suggestions.length === 0){
            return null
        }
        return(
            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )
    }
    render(){
        return(
            <div>
                <input onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}