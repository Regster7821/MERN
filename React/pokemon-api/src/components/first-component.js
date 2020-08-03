import React, { useState, useEffect, useRef } from 'react';


const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);
 
    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) func();
            else didMount.current = true;
        }, deps);
    };
    
    useDidMountEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, [clicked]);

    const onClick = e => {
        clicked?
        setClicked(false):
        setClicked(true);
        console.log(clicked);
    }

    return (
        <div>
            <button onClick={ onClick }>Fetch Pokemon</button>
            <ul>

                    {pokemon.length > 0 && pokemon.map((person, index)=>{
                        return (<div id='pokemon-list' key={index}>{person.name}</div>)
                    })}
                
            </ul>    
        </div>
    );
}

export default Pokemon;
