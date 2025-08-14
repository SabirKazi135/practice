import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Product Page</h1>
      <h2 className="text-gray-300">
        Product ID: <span className="text-blue-400">{productId}</span>
      </h2>
    </div>
  );
}
export default Product;
