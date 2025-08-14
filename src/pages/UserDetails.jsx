import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';

function UserDetails() {
  const { userName } = useParams();
  const navigate = useNavigate();

  function GoBack() {
    navigate(-1);
  }

  return (
    <div className="space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-400">
        Extra Details for {userName}
      </h2>

      <p className="text-gray-300">
        This section contains additional information about{' '}
        <span className="font-semibold text-blue-300">{userName}</span>.
      </p>

      <button
        onClick={GoBack}
        className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-md transition hover:bg-red-600"
      >
        Go Back
      </button>

      <div>
        <NavLink
          to="settings"
          className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-md transition hover:bg-green-600"
        >
          Settings
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default UserDetails;
