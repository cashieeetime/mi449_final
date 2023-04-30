// import { TextField } from '@mui/material';
import './App.css';
import React from 'react';

var ipAddress = "";

function Mypage () {
  
  function handleClickB1() {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
      alert(JSON.stringify(data));
      ipAddress = data['ip'];
      document.getElementById("MyIP").value = ipAddress
      }) 
      .catch((err) => {
        console.log(err.message);
      });
  }  

  function handleClickB2() {
    fetch('https://ipapi.co/' + ipAddress + '/json/')
      .then(function(response) {
      response.json().then(jsonData => {
      alert(JSON.stringify(jsonData['city'] + ", " + jsonData['region']));
    });
  })
    .catch(function(error) {
    console.log(error)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClickB1}>
          What's my IP address?
        </button>
        Name: <input type="text" id="MyIP" value="ipAddress"></input>
        <button onClick={handleClickB2}>
          What's my City?
        </button>
      </header>
    </div>
  )
}

function App() {
  return (
    Mypage()
  )
} 

export default App;