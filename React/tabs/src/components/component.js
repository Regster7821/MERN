import React, { useState } from 'react';

var p1_original = 'Lorem ipsum lorem ipsum lorem ipsum';
var p2_original = 'I took my dog for a walk today';
var p3_original = 'The weather was beautiful yesterday';

const Component = () => {
    const [P1, setP1] = useState('')
    const [P2, setP2] = useState('')
    const [P3, setP3] = useState('')

    const setP1Text = () => {
        setP1(p1_original);
        if (P2 === 'I took my dog for a walk today'){
            setP2('');
        };
        if (P3 === 'The weather was beautiful yesterday'){
            setP3('');
        };
    };
    const setP2Text = () => {
        setP2(p2_original);
        if (P1 === 'Lorem ipsum lorem ipsum lorem ipsum'){
            setP1('');
        };
        if (P3 === 'The weather was beautiful yesterday'){
            setP3('');
        };
    };
    const setP3Text = () => {
        setP3(p3_original);
        if (P1 === 'Lorem ipsum lorem ipsum lorem ipsum'){
            setP1('');
        };
        if (P2 === 'I took my dog for a walk today'){
            setP2('');
        };
    };

    return(
     <div>  
        <div id='buttons'>
            <button onClick={ setP1Text }>Tab 1</button>
            <button onClick={ setP2Text }>Tab 2</button>
            <button onClick={ setP3Text }>Tab 3</button>
        </div>
        <span className='paragraph'>
            <p>{ P1 }</p>
            <p>{ P2 }</p>
            <p>{ P3 }</p>
        </span>
    </div> 
    );
};

export default Component;