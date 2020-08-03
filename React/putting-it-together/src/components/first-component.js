import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            ageUp: this.props.age
        };
    };

    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div className='Container'>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.ageUp}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick={ () => this.setState({ ageUp: this.state.ageUp + 1 }) }>Birthday button for { firstName } { lastName }</button>
            </div>
        );
    }
}

export default PersonCard;