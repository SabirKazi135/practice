import { Navigate, Outlet } from 'react-router-dom';

localStorage.setItem('auth', 'true');
function PrivateRoute() {
  const isLogginIn = localStorage.getItem('auth') === 'true';
  if (!isLogginIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;
