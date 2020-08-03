import React from 'react';
import { navigate } from '@reach/router';

const Hello = props => {
    const navToHome = event => {
        event.preventDefault();
        navigate('/home')
    };
    const navTo4 = event => {
        event.preventDefault();
        navigate('/4')
    };
    const navToStyled_Hello = event => {
        event.preventDefault();
        navigate('/styled-hello')
    };

    return(
        <div>
            <h1>Hello!</h1>
            <br/><br/>
            <button onClick={ navToHome }>Navigate to page "home"!</button>
            <br/><br/>
            <button onClick={ navTo4 }>Navigate to page "4"!</button>
            <br/><br/>
            <button onClick={ navToStyled_Hello }>Navigate to page "styled-hello"!</button>
        </div>
    );
};

export default Hello;