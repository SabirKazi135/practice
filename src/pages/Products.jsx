import {
  NavLink,
  Outlet,
  useLoaderData,
  useRouteError,
} from 'react-router-dom';

export default function Products() {
  const products = useLoaderData(); // ✅ gets data returned by productsLoader
  const error = useRouteError(); // ✅ catches error thrown inside productsLoader

  // If loader failed
  if (error) {
    return (
      <div className="p-4 text-red-400">
        <h2 className="text-xl font-bold">⚠️ Failed to load products</h2>
        <p>{error.statusText || error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Products Page</h1>

      {/* Example: Show products if available */}
      {products && Array.isArray(products) && products.length > 0 ? (
        <ul className="mb-4 space-y-2">
          {products.map((p) => (
            <li
              key={p.id}
              className="rounded bg-gray-700 p-2 hover:bg-gray-600"
            >
              {p.name} - ${p.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-4 text-gray-400">No products available.</p>
      )}

      {/* Navigation links for nested routes */}
      <nav className="mb-4 flex space-x-4">
        <NavLink
          to="electronics"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400' : 'text-blue-400'
          }
        >
          Electronics
        </NavLink>
        <NavLink
          to="clothing"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400' : 'text-blue-400'
          }
        >
          Clothing
        </NavLink>
        <NavLink
          to="books"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400' : 'text-blue-400'
          }
        >
          Books
        </NavLink>
      </nav>

      {/* Nested content */}
      <Outlet />
    </div>
  );
}
