import { useParams, useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();
  const { productID } = useParams();
  return (
    <div>
      <h1>This is product {productID}</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Product;
