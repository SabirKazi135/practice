import { useParams } from 'react-router-dom';
function Product() {
  const { id } = useParams();
  return <div>This is product with ID: {id}</div>;
}

export default Product;
