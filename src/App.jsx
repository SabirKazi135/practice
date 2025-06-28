import { useEffect, useRef, useState } from 'react';

export default function App() {
  // const [number, setNumber] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    console.log('Component rendered');
  });

  function handleClick() {
    ref.current++;
  }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-6 text-gray-100">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
