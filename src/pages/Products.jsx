import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(setProducts)
      .catch(setError);
  }, []);

  if (error) {
    return <p className="text-red-400">Error: {error.message}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Products Page</h1>

      <ul className="mb-4 space-y-2">
        {products.map((p) => (
          <li key={p.id} className="rounded bg-gray-700 p-2 hover:bg-gray-600">
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>

      <nav className="mb-4 flex space-x-4">
        <NavLink to="electronics">Electronics</NavLink>
        <NavLink to="clothing">Clothing</NavLink>
        <NavLink to="books">Books</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
