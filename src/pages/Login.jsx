import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    if (userName == 'sabir') {
      navigate('/user/sabir', { replace: true });
    } else {
      navigate('/contact');
    }
  }

  function Change(e) {
    setUserName(e.target.value);
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-6 bg-gray-700">
      <h2 className="text-3xl font-bold text-white">Login Page</h2>

      <input
        type="text"
        value={userName}
        onChange={Change}
        placeholder="Enter username"
        className="w-64 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleLogin}
        className="rounded-lg bg-blue-500 px-6 py-2 text-lg font-medium text-white shadow-md transition-all hover:bg-blue-600 active:scale-95"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
