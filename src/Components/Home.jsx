import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate('order-summary', { replace: true })}>
        Place Order
      </button>
    </>
  );
}
