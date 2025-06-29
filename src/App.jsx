import { useRef, useEffect, useState } from 'react';
function App() {
  const input = useRef(null);
  const click = useRef(0);
  useEffect(() => {
    input.current?.focus();
  });

  function clicked() {
    click.current++;
    console.log('Button CLiked : ', click.current);
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-gray-900 p-6 text-gray-100">
      <input
        type="text"
        placeholder="Enter text..."
        ref={input}
        className="rounded-md bg-gray-400 px-5 py-2 text-base text-gray-100 placeholder:text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <button
        className="rounded-[6px] bg-blue-400 px-4 py-1 text-xl"
        onClick={() => clicked()}
      >
        Click
      </button>
    </div>
  );
}

export default App;
