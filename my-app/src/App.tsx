import React from 'react';
import './App.css';
import Bored from './components/bored';
import Player2 from './components/Player2';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Bored />
        <Player2 />
      </header>
    </div>
  );
}

export default App;
