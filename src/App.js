import { TextField } from '@mui/material';
import './App.css';
import React from 'react';

function Button1() {
  function handleClick() {
    fetch('https://api.ipify.org?format=json')
          .then((response) => response.json())
          .then((data) => {
            this.refs.ipAddress.getInputNode().value = (JSON.stringify(data));
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
        <TextField ref="ipAddress"/>

      </header>
    </div>
  )  
}

function App() {
  return Button1()
} 

export default App;
