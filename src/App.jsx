import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import Featured from './Components/Featured';
import NewProducts from './Components/NewProducts';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';
import Profile from './Components/profile';

// Lazy load the About component
const LazyAbout = React.lazy(() => import('./Components/About'));

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Lazy-loaded About route with fallback */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading About Page...</div>}>
              <LazyAbout />
            </Suspense>
          }
        />

        <Route path="/order-summary" element={<OrderSummary />} />

        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
