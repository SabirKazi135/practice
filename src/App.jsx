import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const firstVisit = !localStorage.getItem('visitedBefore');

// Custom helper
const delayImport = (importPromise) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importPromise), 2000); // 2s only first time
  });

// ⏳ Apply delay only if first visit
const Layout = lazy(() =>
  firstVisit ? delayImport(import('./pages/Layout')) : import('./pages/Layout'),
);
const Home = lazy(() =>
  firstVisit ? delayImport(import('./pages/Home')) : import('./pages/Home'),
);


const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserDetails = lazy(() => import('./pages/UserDetails'));
const Product = lazy(() => import('./pages/Product'));
const Books = lazy(() => import('./pages/Books'));
const Electronics = lazy(() => import('./pages/Electronics'));
const Clothing = lazy(() => import('./pages/Clothing'));
const NotFound = lazy(() => import('./pages/NotFound'));
const User = lazy(() => import('./pages/User'));
const Login = lazy(() => import('./pages/Login'));
const UserSettings = lazy(() => import('./pages/UserSettings'));
const Logger = lazy(() => import('./pages/Logger'));
const Cart = lazy(() => import('./pages/Cart'));
const PrivateRoute = lazy(() => import('./pages/PrivateRoute'));
const Profile = lazy(() => import('./pages/Profile'));

import LoadingFallback from './pages/LoadingFallBack';

function App() {
  if (firstVisit) {
    localStorage.setItem('visitedBefore', 'true');
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="mb-2 text-3xl font-bold">Main Page</h1>
      <h2 className="mb-6 text-xl">Main Navigation</h2>

      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <Logger />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="user/:userName" element={<User />}>
                <Route path="details" element={<UserDetails />}>
                  <Route path="settings" element={<UserSettings />} />
                </Route>
              </Route>
              <Route path="product/:productId" element={<Product />} />
              <Route path="*" element={<NotFound />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="cart" element={<Cart />} />
              <Route path="products" element={<Products />}>
                <Route path="electronics" element={<Electronics />} />
                <Route path="clothing" element={<Clothing />} />
                <Route path="books" element={<Books />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
