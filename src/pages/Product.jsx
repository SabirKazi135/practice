import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (productId === '0') {
      navigate('/NotFound', { replace: true });
    }
  }, [productId, navigate]);

  function Goback() {
    navigate(-1);
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Product Page</h1>
      <h2 className="text-gray-300">
        Product ID: <span className="text-blue-400">{productId}</span>
      </h2>

      <button onClick={() => Goback()}>Go Back</button>
    </div>
  );
}
export default Product;
