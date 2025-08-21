import { Outlet, useSearchParams, NavLink } from 'react-router-dom';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category') || 'All categories';
  const page = parseInt(searchParams.get('page') || '1', 10);

  // Function to update page
  const goToPage = (newPage) => {
    setSearchParams({
      category: category !== 'All categories' ? category : '',
      page: newPage,
    });
  };

  return (
    <div className="rounded-xl bg-gray-900 p-8 text-white shadow-lg">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">🛍 Products</h1>
        <p className="mt-2 text-gray-400">
          Explore our categories. Currently viewing:{' '}
          <span className="font-semibold text-blue-400">{category}</span> |
          Page: <span className="font-semibold text-yellow-400">{page}</span>
        </p>
      </div>

      {/* Nav Links */}
      <nav className="mb-8 flex justify-center gap-6">
        {['electronics', 'clothing', 'books'].map((cat) => (
          <NavLink
            key={cat}
            to={`?category=${cat}&page=1`}
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium transition ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </NavLink>
        ))}
      </nav>

      {/* Filter Buttons */}
      <div className="mb-10 flex justify-center gap-4">
        <button
          onClick={() => setSearchParams({ category: 'electronics', page: 1 })}
          className="rounded-lg bg-green-600 px-5 py-2 shadow hover:bg-green-500"
        >
          Show Electronics
        </button>
        <button
          onClick={() => setSearchParams({ category: 'clothing', page: 1 })}
          className="rounded-lg bg-green-600 px-5 py-2 shadow hover:bg-green-500"
        >
          Show Clothing
        </button>
        <button
          onClick={() => setSearchParams({ category: 'books', page: 1 })}
          className="rounded-lg bg-green-600 px-5 py-2 shadow hover:bg-green-500"
        >
          Show Books
        </button>
      </div>

      {/* Nested Routes (Outlet) */}
      <div className="border-t border-gray-700 pt-6">
        <Outlet />
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-6">
        <button
          onClick={() => goToPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className={`rounded-lg px-5 py-2 shadow transition ${
            page === 1
              ? 'cursor-not-allowed bg-gray-600'
              : 'bg-blue-600 hover:bg-blue-500'
          }`}
        >
          ⬅ Previous
        </button>

        <button
          onClick={() => goToPage(page + 1)}
          className="rounded-lg bg-blue-600 px-5 py-2 shadow hover:bg-blue-500"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
