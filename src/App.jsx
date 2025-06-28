import { useEffect, useRef, useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//     countRef.current++;

//     // console.log('State:', count);
//     console.log('Ref:', countRef.current);
//   };

//   return (
//     <div className="flex h-screen flex-col items-center justify-center bg-gray-900 p-6 text-white">
//       <div className="mb-4 text-3xl font-semibold">
//         Count: <span className="text-yellow-400">{countRef.current}</span>
//       </div>
//       <button
//         onClick={handleIncrement}
//         className="rounded-lg bg-yellow-500 px-6 py-2 font-bold text-black transition duration-300 hover:bg-yellow-600"
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 p-6">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="w-64 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}
