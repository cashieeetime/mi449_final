import './App.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function MyForm() {

  return (
    <div className="App">
      <header className="App-header">

        <button>What's my IP address?</button><br></br>
        <button>What's my city?</button><br></br>
          
      

      </header>
    </div>
  )
}

function App() {
  return MyForm()
}

export default App;
