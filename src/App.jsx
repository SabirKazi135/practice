import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Hello from use useEffect');

    return () => {};
  }, []);

  useEffect(() => {
    console.log('Counter updated:', count);

    return () => {
      console.log('switching between two components', count);
    };
  }, [count]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <button onClick={() => changeToRaees}>Raees</button>
      <button onClick={() => changeToSabir}>Sabir</button>
    </div>
  );
}
