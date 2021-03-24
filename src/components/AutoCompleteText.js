import React from 'react';

export default class AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items = [
            'david',
            'danny',
            'sara',
            'jame',
        ];
    }

    render(){
        return(
            <div>
                <input type ="text" />
                <ul>
                    {this.items.map((item) => <li>(item)</li>)}
                </ul>
            </div>
        )
    }
}