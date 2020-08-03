import React from 'react';
import './App.css';

import PersonCard from './components/first-component';

function App() {
  return (
    <div className="App">
      <span className='PersonCard'>
        <PersonCard 
          firstName={'Jane'} 
          lastName={'Doe'} 
          age={45} 
          hairColor={'Black'}
        />
      </span>
      <span className='PersonCard'>
        <PersonCard 
          firstName={'John'} 
          lastName={'Smith'} 
          age={88} 
          hairColor={'Brown'}
        />
      </span>
    </div>
  );
}

export default App;
