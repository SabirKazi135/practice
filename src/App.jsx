import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';

function App() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-center text-3xl font-bold">My React App</h1>

      <nav className="mb-6">
        <ul className="flex justify-center space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded px-4 py-2 ${
                  isActive ? 'font-bold text-red-500' : 'text-black'
                } hover:underline`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded px-4 py-2 ${
                  isActive ? 'font-bold text-red-500' : 'text-black'
                } hover:underline`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `rounded px-4 py-2 ${
                  isActive ? 'font-bold text-red-500' : 'text-black'
                } hover:underline`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/user/john"
              className={({ isActive }) =>
                `rounded px-4 py-2 ${
                  isActive ? 'font-bold text-red-500' : 'text-black'
                } hover:underline`
              }
            >
              John's Profile
            </NavLink>
            <NavLink
              to="/user/sabir"
              className={({ isActive }) =>
                `rounded px-4 py-2 ${
                  isActive ? 'font-bold text-red-500' : 'text-black'
                } hover:underline`
              }
            >
              Sabir's Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
