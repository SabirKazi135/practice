import { Route, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import Product from './pages/Product';
function App() {
  return (
    <>
      <h1>Main Page </h1>
      <h2>Main nav Page</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/user/sabir">Sabir Profile</NavLink>
          </li>
          <li>
            <NavLink to="/user/alice">Alice Profile</NavLink>
          </li>
          <li>
            <NavLink to="/product/1">Product 1</NavLink>
          </li>
          <li>
            <NavLink to="/product/2">Product 2</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userName" element={<User />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
