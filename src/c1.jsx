import { useContext } from 'react';
import { MyContext } from './context.js';

function C1() {
    const { isDarkMode, name, email } = useContext(MyContext);

  return (
    <div
      className={`flex  flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-green-500' : 'bg-gray-100 text-gray-900'} p-6`}
    >
      <h1>Hello</h1>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default C1;
