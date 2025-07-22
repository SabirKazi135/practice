import { useNavigate, useParams } from 'react-router-dom';

function User() {
  const Navigate = useNavigate();
  const { id } = useParams();

  function handleLogout() {
    Navigate('/login', { replace: true });
  }
  return (
    <div>
      <h1>This is {id}'s profile</h1>

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
