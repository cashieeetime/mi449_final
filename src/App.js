import './App.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function MyForm() {
  const [ip, setIP] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <header className="App-header">

        <form>
          <button>What's my IP address?</button><br></br>
          <button>What's my city?</button><br></br>
          
        </form>

      </header>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);


function App() {
  return MyForm()
}

export default App;
