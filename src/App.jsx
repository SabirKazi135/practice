import { useEffect, useRef, useState } from 'react';
import { MyContext } from './context.js';
export default function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <MyContext.Provider value={{ isDarkMode, setDarkMode }}>
      <div
        className={`flex h-screen flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} p-6`}
      >
        <h1>Hello</h1>
      </div>
    </MyContext.Provider>
  );
}
