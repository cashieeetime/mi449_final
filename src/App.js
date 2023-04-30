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
          <label>What's my IP address? : <br></br>
            <input
              type="button" 
              value={ip}
              onChange={(e) => setIP(e.target.value)}
            />
          </label><br></br>
          <label>What's my city? : <br></br>
            <input
              type="button" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label><br></br>
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
