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
  return Button1()
} 

export default App;
