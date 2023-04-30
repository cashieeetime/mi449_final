import './App.css';
import React from 'react';

function Button1() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      What's my IP address?
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        Button1()

      </header>
    </div>
  )
} 

export default App;
