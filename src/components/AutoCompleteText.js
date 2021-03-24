import React from 'react';
import './AutoCompleteText.css';

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
            text:'',
        };
    }
    //when the text in the box has changed get its value and filter it with the suggestions list.
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
        this.setState(()=> ({suggestions, text: value}));
    }

    //Enables selection of the suggestions
    suggestionSelected(value){
        //update state with value updating the text. Then wipe the suggestions array as something would have been suggested.
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }
    //shows us suggested places
    renderSuggestions(){
        const{suggestions} = this.state;
        //if theres no input show nothing.
        if(suggestions.length === 0){
            return null
        }
        return(
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    render(){
        const {text} = this.state;
        return(
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}