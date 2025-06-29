import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  //   countRef.current++;

  //   // console.log('State:', count);
  //   console.log('Ref:', countRef.current);
  // };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-gray-900 p-6 text-gray-100">
      {/* Counter Section */}
      {/* <div className="w-full max-w-md space-y-4 rounded-2xl bg-gray-800 p-6 text-center shadow-md">
        <h2 className="text-xl font-semibold">Counter</h2>
        <p className="text-lg">State: {countRef.current}</p>
        <p className="text-sm text-gray-400">Ref (live): {countRef.current}</p>
        <button
          onClick={handleIncrement}
          className="rounded-xl bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700"
        >
          Increment
        </button>
      </div> */}

      {/* Input Section */}
      <div className="w-full max-w-md space-y-4 rounded-2xl bg-gray-800 p-6 text-center shadow-md">
        <h2 className="text-xl font-semibold">Auto-Focus Input</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="w-full rounded-lg border border-gray-700 bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </div>
  );
}
