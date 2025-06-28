import { useContext } from 'react';
import { MyContext } from './context.js';
function C2() {
  const { isDarkMode, name, email, count, setCount } = useContext(MyContext);

  return (
    <div
      className={`flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-900 text-yellow-500' : 'bg-gray-100 text-gray-900'} p-6`}
    >
      <h1>Hello</h1>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount((s) => s - 1)}>decreament</button>
    </div>
  );
}

export default C2;
