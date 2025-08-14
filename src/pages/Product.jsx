import { useParams } from 'react-router-dom';
function Product() {
  const { productID } = useParams();
  return (
    <>
      <h2>Product's Page</h2>
      <p>Product id: {productID}</p>
    </>
  );
}

export default Product;
