// src/pages/Cart.jsx
import { useLocation } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const fromPage = location.state?.from || 'unknown'; // fallback

  return (
    <div className="space-y-4 rounded-lg bg-gray-800 p-6 shadow-md">
      <h1 className="text-2xl font-semibold text-white">Cart Page</h1>
      <p className="text-gray-300">
        You came from: <span className="text-blue-400">{fromPage}</span>
      </p>
    </div>
  );
}

export default Cart;
