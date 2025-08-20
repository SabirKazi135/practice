import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'All categories';
  const page = parseInt(searchParams.get('page') || '1', 10);

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center space-y-6 rounded-xl bg-gray-800 p-6 text-white shadow-lg">
      <h2 className="text-3xl font-bold">Products Page</h2>

      <h3 className="text-lg text-gray-300">
        Showing category: <span className="text-blue-400">{category}</span>
      </h3>

      <h3 className="text-lg text-gray-300">
        Current page: <span className="text-yellow-400">{page}</span>
      </h3>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSearchParams({ category: 'Electronics', page })}
          className="rounded-lg bg-blue-500 px-5 py-2 font-medium shadow-md transition hover:bg-blue-600 active:scale-95"
        >
          Electronics
        </button>

        <button
          onClick={() => setSearchParams({ category: 'Clothing', page })}
          className="rounded-lg bg-green-500 px-5 py-2 font-medium shadow-md transition hover:bg-green-600 active:scale-95"
        >
          Clothing
        </button>

        <button
          onClick={() => setSearchParams({ category: 'Books', page })}
          className="rounded-lg bg-purple-500 px-5 py-2 font-medium shadow-md transition hover:bg-purple-600 active:scale-95"
        >
          Books
        </button>

        <button
          onClick={() => setSearchParams({})}
          className="rounded-lg bg-gray-600 px-5 py-2 font-medium shadow-md transition hover:bg-gray-700 active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Pagination */}
      <div className="flex gap-4">
        <button
          onClick={() =>
            setSearchParams({ category, page: Math.max(1, page - 1) })
          }
          disabled={page <= 1}
          className="rounded-lg bg-red-500 px-5 py-2 font-medium shadow-md transition hover:bg-red-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous Page
        </button>

        <button
          onClick={() => setSearchParams({ category, page: page + 1 })}
          className="rounded-lg bg-yellow-500 px-5 py-2 font-medium shadow-md transition hover:bg-yellow-600 active:scale-95"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
