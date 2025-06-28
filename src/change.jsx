import { useContext } from 'react';
import { MyContext } from './context.js';
function Cg() {
  const { isDarkMode, name, email, setName, setEmail, count, setCount } =
    useContext(MyContext);

  function changeName(e) {
    setName(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${isDarkMode ? 'bg-gray-900 text-purple-500' : 'bg-gray-100 text-gray-900'} p-6`}
    >
      <h1>Hello</h1>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => changeName(e)}
        className={`${isDarkMode ? 'bg-purple-500 text-black' : 'bg-gray-500 text-white'} `}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => changeEmail(e)}
        className={`${isDarkMode ? 'bg-purple-500 text-black' : 'bg-gray-500 text-white'} `}
      />
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Cg;
