import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-6 text-gray-100">
      <button>Click Me</button>
    </div>
  );
}
