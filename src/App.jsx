import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-600">
      <div className="space-y-4 rounded-xl bg-yellow-800 p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Count: {count}</h1>
        <div className="space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
