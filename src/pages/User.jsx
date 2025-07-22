import { Navigate, replace, useNavigate, useParams } from 'react-router-dom';

function User() {
  const Navigate = useNavigate();
  const { id } = useParams();
  function handleLogin() {
    Navigate('/login', { replace: true });
  }
  function handleLogout() {
    Navigate('/login', { replace: true });
  }
  return (
    <div>
      <h1>This is {id}'s profile</h1>
      <button
        onClick={handleLogin}
        style={{ padding: '10px', background: 'blue', color: 'white' }}
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        style={{ padding: '10px', background: 'red', color: 'white' }}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
