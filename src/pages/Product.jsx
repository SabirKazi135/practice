import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  return (
    <>
      <h1>Prodcut Page</h1>
      <h2>Prodct's Id: {productId} </h2>
    </>
  );
}

export default Product;
