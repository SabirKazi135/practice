import { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count is ', count);
    return () => {};
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="w-full max-w-sm space-y-6 rounded-xl bg-white p-8 text-center shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold">🔢 Count: {count}</h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
          >
            ➖ Decrement
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
          >
            ➕ Increment
          </button>
        </div>
      </div>
    </div>
  );
}
