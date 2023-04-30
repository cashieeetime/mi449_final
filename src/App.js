import './App.css';
import React from 'react';

function Button1() {
  function handleClick() {
    fetch('https://api.ipify.org')
          // .then((response) => response.json())
          .then((data) => {
            alert(data.text());
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
