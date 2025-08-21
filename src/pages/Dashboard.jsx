// src/pages/Dashboard.jsx

import { Navigate, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('auth') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  function LogOut() {
    localStorage.setItem('auth', 'false');
    navigate('/login', { replace: true });
  }
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-gray-300">
        Welcome to your dashboard! You cannot go back to login if you used
        replace.
      </p>

      <button onClick={() => LogOut()}>log out</button>
    </div>
  );
}

export default Dashboard;
