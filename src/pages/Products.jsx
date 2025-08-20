import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'All categories';
  const page = parseInt(searchParams.get('page') || '1', 10);

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center space-y-6 rounded-xl bg-gray-800 p-6 text-white shadow-lg">
      <h2 className="text-3xl font-bold">Products Page</h2>
      <h3 className="text-lg text-gray-300">
        Showing: <span className="text-blue-400">{category}</span>
      </h3>

      <div className="flex space-x-4">
        <button
          onClick={() => setSearchParams({ category: 'Electronics' })}
          className="rounded-lg bg-blue-500 px-5 py-2 font-medium shadow-md transition hover:bg-blue-600 active:scale-95"
        >
          Electronics
        </button>

        <button
          onClick={() => setSearchParams({ category: 'Clothing' })}
          className="rounded-lg bg-green-500 px-5 py-2 font-medium shadow-md transition hover:bg-green-600 active:scale-95"
        >
          Clothing
        </button>

        <button
          onClick={() => setSearchParams({ category: 'Books' })}
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

        <button onClick={() => setSearchParams({ page: page + 1 })}>
          Next Page
        </button>
        <button
          onClick={() => setSearchParams({ page: Math.max(1, page - 1) })}
        >
          Previous Page
        </button>
      </div>
    </div>
  );
}
