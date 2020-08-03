import React from 'react';
import { navigate } from '@reach/router';

const Four = props => {
    const navToHome = event => {
        event.preventDefault();
        navigate('/home')
    };
    const navToHello = event => {
        event.preventDefault();
        navigate('/hello')
    };
    const navToStyled_Hello = event => {
        event.preventDefault();
        navigate('/styled-hello')
    };

    return(
        <div>
            <h1>The number is: 4</h1>
            <br/><br/>
            <button onClick={ navToHome }>Navigate to page "home"!</button>
            <br/><br/>
            <button onClick={ navToHello }>Navigate to page "hello"!</button>
            <br/><br/>
            <button onClick={ navToStyled_Hello }>Navigate to page "styled-hello"!</button>
        </div>
    );
};

export default Four;