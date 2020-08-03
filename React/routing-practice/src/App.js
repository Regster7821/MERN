import React, { useEffect } from 'react';
import './App.css';
import { Router, navigate } from '@reach/router';
import Home from './components/home'
import Four from './components/4'
import Hello from './components/hello'
import Styled_Hello from './components/styled-hello'

function App() {
  useEffect( () => {
    navigate('/home');
  });

  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Four path='/4' />
        <Hello path='/hello' />
        <Styled_Hello path='/styled-hello' />
      </Router>
    </div>
  );
}

export default App;
