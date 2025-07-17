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
        <ul>
          <NavLink></NavLink>
        </ul>
        <ul>
          <NavLink></NavLink>
        </ul>
        <ul>
          <NavLink></NavLink>
        </ul>
        <ul>
          <NavLink></NavLink>
        </ul>
        <ul>
          <NavLink></NavLink>
        </ul>
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
