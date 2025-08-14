import { Route, Router, NavLink } from 'react-router-dom';
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
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/user/:sabir">sabir profile</NavLink>
          <NavLink to="/user/:alice">alice profile</NavLink>
          <NavLink to="/product/:1">prodcut 2</NavLink>
          <NavLink to="/product/:2">product 2</NavLink>
        </li>
      </nav>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/user/:userName" element={<User />} />
        <Route path="/product/:productId" element={<Product />} />
      </Router>
    </>
  );
}

export default App;
