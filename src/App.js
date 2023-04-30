import './App.css';
import React from 'react';

function Button1() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          What's my IP address?
        </button>
      </header>
    </div>
  )  
}

function App() {
  return Button1()
} 

export default App;
