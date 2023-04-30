// import { TextField } from '@mui/material';
import './App.css';
import React from 'react';

var ipAddress = "";

function Button1() {
  function handleClick() {
    fetch('https://api.ipify.org?format=json')
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
            ipAddress = data['ip'];
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
    fetch('https://geoip.maxmind.com/geoip/v2.1/city/99.6.61.195\?use-downloadable-db=1\&demo=1\&lang=en', {headers: {Authentication: 'Bearer v2.local.zfVRoOkNURXQhUD4CyzJLldEiDvU1LTwOoEMw42J9jee3UR7ch0LAtEbJs27Weub9GgkXe839l8P36Un-Eh7rYajXXOOPpnRqMricl2Bhq_ExjzU7yWu35OJZwDJ-tlp3N0tj3KGBJx2frBDsAgxw0Ybmfh3U0D8yJvVKDJiMXXOeshtaQmsQX6mIvFru3yZE0oslqsojFEq50hh'}})
          .then((response) => response.json())
          .then((data) => {
            // data = data[ipAddress[5]];
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