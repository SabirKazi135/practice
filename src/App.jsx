import { Route, NavLink, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// ✅ Lazy loaded main pages
const Products = lazy(() => import('./pages/Products'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDetails = lazy(() => import('./pages/UserDetails'));
const Product = lazy(() => import('./pages/Product'));

// ✅ Lazy loaded nested category pages
const Books = lazy(() => import('./pages/Books'));
const Electronics = lazy(() => import('./pages/Electronics'));
const Clothing = lazy(() => import('./pages/Clothing'));

import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Login from './pages/Login';
import UserSettings from './pages/UserSettings';
import Logger from './pages/Logger';
import Cart from './pages/Cart';
import PrivateRoute from './pages/PrivateRoute';
import Profile from './pages/profile';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="mb-2 text-3xl font-bold">Main Page</h1>
      <h2 className="mb-6 text-xl">Main Navigation</h2>

      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <Logger />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:userName" element={<User />}>
              <Route path="details" element={<UserDetails />}>
                <Route path="settings" element={<UserSettings />} />
              </Route>
            </Route>
            <Route path="/product/:productId" element={<Product />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />}>
              <Route path="electronics" element={<Electronics />} />
              <Route path="clothing" element={<Clothing />} />
              <Route path="books" element={<Books />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
