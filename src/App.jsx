import { useEffect, useRef, useState } from 'react';

export default function App() {
  // const [number, setNumber] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    console.log('Component rendered');
  });

  function handleClick() {}
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-6 text-gray-100">
      <button onClick={handleClick}>Click Me</button>
      <input type="text" ref={inputRef} />
    </div>
  );
}
