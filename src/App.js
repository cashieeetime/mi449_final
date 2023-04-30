// import { TextField } from '@mui/material';
import './App.css';
import React from 'react';

function Button1() {
  function handleClick() {
    fetch('https://api.ipify.org?format=json')
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
            const ipAddress = data;
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

function Button2() {
  function handleClick() {
    fetch('https://geoip.maxmind.com/geoip/v2.1/city/99.6.61.195\?use-downloadable-db=1\&demo=1\&lang=en')
          .then((response) => response.json())
          .then((data) => {
            ip = ipAddress[1];
            alert(JSON.stringify(data));
          }) 
          .catch((err) => {
            console.log(err.message);
          });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>
          What's my City?
        </button>
      </header>
    </div>
  )  
}

function App() {
  return (
    Button1(), Button2()
  )
} 

export default App;