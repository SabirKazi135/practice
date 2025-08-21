import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">This is Home Page</h2>
      <p className="text-gray-300">
        Welcome to the homepage. Use the navigation above to explore.
      </p>
      <button onClick={() => navigate('/products')}>Products</button>
    </div>
  );
}
export default Home;
