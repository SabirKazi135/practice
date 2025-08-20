import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  return (
    <div>
      <nav className="mb-8">
        <ul className="flex flex-wrap gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/sabir"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Sabir Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/alice"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Alice Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/bob"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Bob Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product/1"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Product 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product/2"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Product 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 transition ${
                  isActive ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      {/* Main content */}
      <main className="flex-grow px-4">
        <strong>Location: {location.pathname}</strong>
        {location.pathname === '/about' && (
          <div>Welcome to the About Page!</div>
        )}
        <Outlet /> {/* Child pages render here */}
      </main>

      {/* Footer */}
      <footer className="mt-8 bg-gray-900 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Website Name — All Rights Reserved
      </footer>
    </div>
  );
}
