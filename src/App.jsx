import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import LoadingFallback from './pages/LoadingFallBack';

// ⏳ Startup delay (only for Layout & Home)
const delayImport = (importPromise) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importPromise), 2000);
  });

const Layout = lazy(() => delayImport(import('./pages/Layout')));
const Home = lazy(() => delayImport(import('./pages/Home')));

// 🚀 Lazy load everything else
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Electronics = lazy(() => import('./pages/Electronics'));
const Clothing = lazy(() => import('./pages/Clothing'));
const Books = lazy(() => import('./pages/Books'));
const Product = lazy(() => import('./pages/Product'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const User = lazy(() => import('./pages/User'));
const UserDetails = lazy(() => import('./pages/UserDetails'));
const UserSettings = lazy(() => import('./pages/UserSettings'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const PrivateRoute = lazy(() => import('./pages/PrivateRoute'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Logger = lazy(() => import('./pages/Logger'));
const Cart = lazy(() => import('./pages/Cart'));

// ✅ Example loader for Products (simulate API fail)
export async function productsLoader() {
  const res = await fetch('/fake-endpoint'); // wrong URL to test
  if (!res.ok) throw new Response('Failed to fetch products', { status: 500 });
  return res.json();
}

// ✅ Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Products />
          </Suspense>
        ),
        loader: productsLoader,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'electronics',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Electronics />
              </Suspense>
            ),
          },
          {
            path: 'clothing',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Clothing />
              </Suspense>
            ),
          },
          {
            path: 'books',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Books />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'product/:productId',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: 'user/:userName',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <User />
          </Suspense>
        ),
        children: [
          {
            path: 'details',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <UserDetails />
              </Suspense>
            ),
            children: [
              {
                path: 'settings',
                element: (
                  <Suspense fallback={<LoadingFallback />}>
                    <UserSettings />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Login />
          </Suspense>
        ),
      },
      {
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PrivateRoute />
          </Suspense>
        ),
        children: [
          {
            path: 'dashboard',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Dashboard />
              </Suspense>
            ),
          },
          {
            path: 'profile',
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Profile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="mb-2 text-3xl font-bold">Main Page</h1>
      <h2 className="mb-6 text-xl">Main Navigation</h2>

      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <Suspense fallback={<LoadingFallback />}>
          <Logger />
        </Suspense>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
