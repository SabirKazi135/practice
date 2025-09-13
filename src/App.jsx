import { useState } from 'react';

// Parent.jsx
function Parent() {
  const [count, setCount] = useState(0);
  return <Middle count={count} setCount={setCount} />;
}

// Middle.jsx
function Middle({ count, setCount }) {
  return <Child count={count} setCount={setCount} />;
}

// Child.jsx
function Child({ count, setCount }) {
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}

function App() {
  return (
    <>
      <Parent />
      <Parent />
      <Parent />
    </>
  );
}

export default App;
