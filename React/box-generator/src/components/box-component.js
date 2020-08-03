import React, { useState } from 'react';
import Box from './components/box';

const BoxGenerator = () => {
    // const [Color, setColor] = useState("");
    let color = '';
    const [box, setBox] = useState({
        colors: []
    });
    const onChange = (e) => {
        color = e.target.value;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const grabColor = () => {
        setBox({
            ...box,
            colors: [...box.colors, color]
        })
    };

    return (
        <div id='form-area'>
            <form onSubmit={ handleSubmit }>
                <span className='input-label'>Color</span>
                <input className='color-input' type='text' onChange={ onChange } name='Color' value={ color }/>
                <button className='color-button' onClick={ grabColor }>Add</button>
            </form>
            { box.colors.map(color => (
                <Box color={color}/>
            )) }
        </div>  
    )
};

export default BoxGenerator;