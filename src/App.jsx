// src/App.jsx
import React from 'react';
import { useCounterStore } from './store/counterStore';

console.log('Initial count:', useCounterStore.getState().count);

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
