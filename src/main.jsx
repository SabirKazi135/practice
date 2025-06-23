import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);

  console.log('🟢 Render: Counter, count =', count);

  useEffect(() => {
    console.log('🔵 useEffect ran in Counter, count =', count);
  });

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

function Dummy() {
  console.log('🟡 Render: Dummy');

  return (
    <div>
      <h2>Dummy Component</h2>
      <p>No useEffect here</p>
    </div>
  );
}

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Component
      </button>
      {showCounter ? <Counter /> : <Dummy />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
