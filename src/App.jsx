import { useEffect, useRef, useState } from 'react';
import { MyContext } from './context.js';
import C1 from './c1.jsx';
import C2 from './c2.jsx';
import Cg from './change.jsx';
export default function App() {
  const [email, setEmail] = useState('sabirkazi135@gmail.com');
  const [name, setName] = useState('sabir kazi');
  const [count, setCount] = useState(0);
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <MyContext.Provider
      value={{ isDarkMode, setDarkMode, name, setName, email, setEmail, count, setCounts }}
    >
      <div
        className={`flex h-screen flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} p-6`}
      >
        <h1>Hello </h1>
        <C1 />
        <C2 />
        <Cg />
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          Toggle Dark Mode
        </button>
        <div>Count: {count}</div>
      </div>
    </MyContext.Provider>
  );
}
