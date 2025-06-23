import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

// import App from './App.jsx';
import './index.css';

function App() {
  const [color, setColor] = useState('red');

  return (
    <div className="h-screen bg-slate-600">
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
