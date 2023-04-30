import './App.css';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">

        <form>
          <label>What song are you looking for?: 
            <input
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
