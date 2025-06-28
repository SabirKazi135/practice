import { useContext } from 'react';
import { MyContext } from './context.js';
function C2() {
  const { isDarkMode, setDarkMode } = useContext(MyContext);

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center ${isDarkMode ? 'text-gray-yellow bg-gray-900' : 'bg-gray-100 text-gray-900'} p-6`}
    >
      <h1>Hello</h1>
    </div>
  );
}

export default C2;
