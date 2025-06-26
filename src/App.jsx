import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      console.log('stoped');
    };
  }, [isRunning]);

  return (
    <div
      className={`flex min-h-screen items-center justify-center space-x-5 bg-gray-900 p-6 text-gray-100`}
    >
      <div>{count}</div>

      <button onClick={() => setIsRunning(false)}>pause</button>
      <button onClick={() => setIsRunning(true)}>start</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
}
