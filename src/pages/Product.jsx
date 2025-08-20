import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId === '0') {
      navigate('/not-found', { replace: true });
    }
  }, [productId, navigate]);

  function goToCart() {
    navigate('/cart', { state: { from: 'products' } });
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="mx-auto mt-8 max-w-md space-y-6 rounded-lg bg-gray-800 p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-white">Product Page</h1>
      <h2 className="text-gray-300">
        Product ID: <span className="text-blue-400">{productId}</span>
      </h2>

      <div className="flex gap-4">
        <button
          onClick={goBack}
          className="rounded-lg bg-gray-600 px-6 py-2 font-medium text-white shadow-md transition hover:bg-gray-700 active:scale-95"
        >
          Go Back
        </button>

        <button
          onClick={goToCart}
          className="rounded-lg bg-green-500 px-6 py-2 font-medium text-white shadow-md transition hover:bg-green-600 active:scale-95"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
