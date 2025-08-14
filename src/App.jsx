import { Route, NavLink, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';

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

      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:userName" element={<User />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
