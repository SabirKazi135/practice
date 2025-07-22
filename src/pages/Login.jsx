import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Imagine authentication is done here
    navigate('/user/sabir', { replace: true }); // Redirect to profile
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button
        onClick={handleLogin}
        style={{ padding: '10px', background: 'blue', color: 'white' }}
      >
        Login
      </button>
    </div>
  );
}
