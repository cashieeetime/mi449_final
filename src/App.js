// import { TextField } from '@mui/material';
import './App.css';
import React from 'react';

var ipAddress = "";

function Mypage () {
  
  function handleClickB1() {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
      ipAddress = data['ip'];
      document.getElementById("MyIP").value = ipAddress
      }) 
      .catch((err) => {
        console.log(err.message);
      });
  }  

  function handleClickB2() {
    var mycity = "";
    fetch('https://ipapi.co/' + ipAddress + '/json/')
      .then(function(response) {
      response.json().then(jsonData => {
      mycity = (jsonData['city'] + ', ' + jsonData['region']);
      document.getElementById("MyCity").value = mycity
    });
  })
    .catch(function(error) {
    console.log(error)
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClickB1} class="hover:border-solid rounded">
          What's my IP address?
        </button><br></br>
        <input type="text" id="MyIP" class="text-black"></input><br></br>
        <button onClick={handleClickB2} class="hover:border-solid rounded">
          What's my City?
        </button><br></br>
        <input type="text" id="MyCity" class="text-black"></input>
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