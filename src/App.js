import './App.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Button1() {
  function handleClick() {
    fetch('https://api.ipify.org?format=json')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
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
