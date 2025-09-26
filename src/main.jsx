import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import useCounterStore from './store/useCounterStore';

useCounterStore.subscribe(
  (state) => state.count, // select only the 'count'
  (count) => console.log('Count changed:', count),
);

// useCounterStore.subscribe((state) => console.log('Store changed'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
