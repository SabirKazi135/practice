import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

// import App from './App.jsx';
import './index.css';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="h-screen bg-slate-600">
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor('blue')}>
        Blue
      </button>
      <button type="button" onClick={() => setColor('red')}>
        Red
      </button>
      <button type="button" onClick={() => setColor('pink')}>
        Pink
      </button>
      <button type="button" onClick={() => setColor('green')}>
        Green
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
