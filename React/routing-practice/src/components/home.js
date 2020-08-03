import React from 'react';
import { navigate } from '@reach/router';

const Home = props => {
    const navTo4 = event => {
        event.preventDefault();
        navigate('/4')
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
            <h1>Welcome!</h1>
            <br/><br/>
            <button onClick={ navTo4 }>Navigate to page "4"!</button>
            <br/><br/>
            <button onClick={ navToHello }>Navigate to page "hello"!</button>
            <br/><br/>
            <button onClick={ navToStyled_Hello }>Navigate to page "styled-hello"!</button>
        </div>
    );
};

export default Home;