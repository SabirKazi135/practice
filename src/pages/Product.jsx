import { useParams } from 'react-router-dom';

function Product() {
  const { productID } = useParams();
  return (
    <div>
      <h1>This is product {productID}</h1>
    </div>
  );
}

export default Product;
