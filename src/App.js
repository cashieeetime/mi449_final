import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>Enter your name:
            <input type="text" />
          </label>
        </form>
      </header>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default App;
