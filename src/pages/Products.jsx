import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // read category from URL, if missing use "all"
  const category = searchParams.get('category') || 'all';

  return (
    <div>
      <h2>Products Page</h2>
      <p>Current category: {category}</p>

      <button onClick={() => setSearchParams({ category: 'books' })}>
        Books
      </button>

      <button onClick={() => setSearchParams({ category: 'electronics' })}>
        Electronics
      </button>
    </div>
  );
}
