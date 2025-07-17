import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import User from './pages/User';
function App() {
  return (
    <div>
      <nav>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={'/product/1'}>Product 1</NavLink>
        </li>
        <li>
          <NavLink to={'/product/2'}>Product 2</NavLink>
        </li>
        <li>
          <NavLink to={'/user/1'}>User 1</NavLink>
        </li>
        <li>
          <NavLink to={'/user/2'}>User 2</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
