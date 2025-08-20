import { useSearchParams } from 'react-router-dom';
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || 'All categories';
  return (
    <div>
      <h2>Products Page</h2>
      <h3>Showing {category} category</h3>

      <div>
        <button onClick={() => setSearchParams({ category: 'Electronics' })}>
          Electronics
        </button>
        <button onClick={() => setSearchParams({ category: 'Clothing' })}>
          Clothing
        </button>
        <button onClick={() => setSearchParams({ category: 'Books' })}>
          Books
        </button>
        <button onClick={() => setSearchParams({})}>Reset</button>
      </div>
    </div>
  );
}
