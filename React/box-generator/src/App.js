import React, { useState } from 'react';
import './App.css';
// import BoxGenerator from './components/box-component'
import Box from './components/box';
import Input from './components/input';

function App() {
  const [box, setBox] = useState({colors: []});
  return (
    <div>
      <div className="App">
        <Input setBox={ setBox } box={ box }/>
      </div>
      <div className="row">
          {box.colors.map(color => (
            <Box color={color}/>
          ))}
      </div>
    </div>
  );
}

export default App;
