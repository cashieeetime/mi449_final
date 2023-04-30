import './App.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit}>
          <label>What song are you looking for?: <br></br>
            <input
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label><br></br>
          <input type="submit" />
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
