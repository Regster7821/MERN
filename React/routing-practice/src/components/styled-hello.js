import React from 'react';
import { navigate } from '@reach/router';

const Styled_Hello = props => {
    const navToHome = event => {
        event.preventDefault();
        navigate('/home')
    };
    const navTo4 = event => {
        event.preventDefault();
        navigate('/4')
    };
    const navToHello = event => {
        event.preventDefault();
        navigate('/hello')
    };

    return(
        <div>
            <h1 className='styled-hello'>Hello!</h1>
            <br/><br/>
            <button onClick={ navToHome }>Navigate to page "home"!</button>
            <br/><br/>
            <button onClick={ navTo4 }>Navigate to page "4"!</button>
            <br/><br/>
            <button onClick={ navToHello }>Navigate to page "hello"!</button>
        </div>
    );
};

export default Styled_Hello;