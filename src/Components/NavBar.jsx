import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <nav className="flex gap-4 bg-gray-900 p-4 text-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'font-bold text-yellow-300 underline' : 'hover:underline'
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'font-bold text-yellow-300 underline' : 'hover:underline'
        }
      >
        About
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? 'font-bold text-yellow-300 underline' : 'hover:underline'
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? 'font-bold text-yellow-300 underline' : 'hover:underline'
        }
      >
        Profile
      </NavLink>
    </nav>
  );
}
