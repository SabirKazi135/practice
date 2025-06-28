import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log('State:', count);
    console.log('Ref:', countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export function Demo2() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-6 text-white">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}
