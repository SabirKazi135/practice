// src/pages/Dashboard.jsx
import { Navigate, useNavigate } from 'react-router-dom';

function Dashboard() {
  const isLoggedIn = localStorage.getItem('auth') === 'true';
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  function LogOut() {
    localStorage.removeItem('auth');
    localStorage.removeItem('username'); // ✅ clear username too
    navigate('/login', { replace: true });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-gray-300">
        Welcome to your dashboard! You cannot go back to login if you used
        replace.
      </p>

      <button
        onClick={LogOut}
        className="rounded-lg bg-red-500 px-6 py-2 font-medium text-white shadow-md transition hover:bg-red-600 active:scale-95"
      >
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
