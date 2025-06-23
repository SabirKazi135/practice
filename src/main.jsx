import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

// import App from './App.jsx';
import './index.css';

function App() {
  console.log('direct');
  useEffect(() => {
    console.log('inside');

    return () => {};
  }, []);

  return <h1> seconds</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
