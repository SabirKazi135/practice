import { Route, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="mb-2 text-3xl font-bold">Main Page</h1>
      <h2 className="mb-6 text-xl">Main Navigation</h2>

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
        </ul>
      </nav>

      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:userName" element={<User />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
