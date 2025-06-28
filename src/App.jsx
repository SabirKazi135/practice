import { useEffect, useRef, useState } from 'react';

export default function App() {
  // const [number, setNumber] = useState(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  useEffect(() => {
    console.log('Component rendered');
  });

  function handleClick1() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  }
  function handleClick2() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  }
  function handleClick3() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';
  }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-6 text-gray-100">
      <button onClick={handleClick1}>Click Me</button>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick2}>Click Me</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick3}>Click Me</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}
