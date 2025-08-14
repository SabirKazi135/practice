import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  const { userName } = useParams();

  function LogOut() {
    navigate('/login', { replace: true });
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">User Page</h1>
      <h2 className="text-gray-300">
        User's Name: <span className="text-blue-400">{userName}</span>
      </h2>

      <button
        onClick={LogOut}
        className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-md transition hover:bg-red-600"
      >
        Log Out
      </button>

      <NavLink
        to="details"
        className="inline-block rounded-lg bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
      >
        View Details
      </NavLink>
      <hr />
      <Outlet />
    </div>
  );
}

export default User;
