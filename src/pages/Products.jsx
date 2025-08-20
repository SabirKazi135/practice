import { Outlet, useSearchParams, NavLink } from 'react-router-dom';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'All categories';
  const page = parseInt(searchParams.get('page') || '1', 10);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-8 rounded-xl bg-gray-900 p-8 text-white shadow-lg">
      {/* Page heading */}
      <header className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-wide">Products Page</h2>
        <p className="text-gray-400">
          Browse categories and paginate through items
        </p>
      </header>

      {/* Info */}
      <div className="space-y-1 text-center">
        <h3 className="text-lg text-gray-300">
          Showing category:{' '}
          <span className="font-semibold text-blue-400">{category}</span>
        </h3>
        <h3 className="text-lg text-gray-300">
          Current page:{' '}
          <span className="font-semibold text-yellow-400">{page}</span>
        </h3>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {['Electronics', 'Clothing', 'Books'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ category: cat, page })}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 px-5 py-2 font-medium shadow-md transition hover:from-blue-600 hover:to-blue-800 active:scale-95"
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSearchParams({})}
          className="rounded-lg bg-gray-600 px-5 py-2 font-medium shadow-md transition hover:bg-gray-700 active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Pagination */}
      <div className="flex gap-6">
        <button
          onClick={() =>
            setSearchParams({ category, page: Math.max(1, page - 1) })
          }
          disabled={page <= 1}
          className="rounded-lg bg-red-500 px-5 py-2 font-medium shadow-md transition hover:bg-red-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setSearchParams({ category, page: page + 1 })}
          className="rounded-lg bg-yellow-500 px-5 py-2 font-medium shadow-md transition hover:bg-yellow-600 active:scale-95"
        >
          Next
        </button>
      </div>

      {/* Nested routes section */}
      <section className="w-full max-w-3xl space-y-4">
        {/* NavLinks styled as tabs */}
        <nav className="flex justify-center gap-6 border-b border-gray-700 pb-2">
          {['electronics', 'clothing', 'books'].map((tab) => (
            <NavLink
              key={tab}
              to={tab}
              className={({ isActive }) =>
                `rounded-t-md px-4 py-2 font-medium transition ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </NavLink>
          ))}
        </nav>

        {/* Outlet display box */}
        <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center shadow-inner">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
