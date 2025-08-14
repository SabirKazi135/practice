import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/user/sabir', { replace: true });
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800">Login Page</h2>
      <button
        onClick={handleLogin}
        className="rounded-lg bg-blue-500 px-6 py-2 text-lg font-medium text-white shadow-md transition-all hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
