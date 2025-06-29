import { useRef, useEffect, useState } from 'react';
function App() {
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-gray-900 p-6 text-gray-100">
      <input
        type="text"
        placeholder="Enter text..."
        className="rounded-md bg-gray-400 px-5 py-2 text-base text-gray-100 placeholder:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}

export default App;
