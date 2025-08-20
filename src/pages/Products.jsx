import { useSearchParams } from 'react-router-dom';

const allProducts = {
  Electronics: [
    'Smartphone',
    'Laptop',
    'Headphones',
    'Smartwatch',
    'Camera',
    'Tablet',
    'Drone',
    'Keyboard',
    'Monitor',
    'Speaker',
  ],
  Clothing: [
    'T-Shirt',
    'Jeans',
    'Jacket',
    'Sneakers',
    'Cap',
    'Dress',
    'Sweater',
    'Scarf',
    'Shorts',
    'Boots',
  ],
  Books: [
    'React Guide',
    'JavaScript Basics',
    'CSS Mastery',
    'Tailwind Handbook',
    'Design Patterns',
    'Clean Code',
    'Algorithms 101',
    'Data Structures',
    'Next.js Deep Dive',
    'Frontend Interview Prep',
  ],
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'All';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = 6;

  // Pick correct list
  const items =
    category === 'All'
      ? [
          ...allProducts.Electronics,
          ...allProducts.Clothing,
          ...allProducts.Books,
        ]
      : allProducts[category] || [];

  // Pagination logic
  const startIndex = (page - 1) * pageSize;
  const currentItems = items.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(items.length / pageSize) || 1;

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6 rounded-xl bg-gray-800 p-6 text-white shadow-lg">
      <h2 className="text-3xl font-bold">Products Page</h2>
      <h3 className="text-lg text-gray-300">
        Showing category: <span className="text-blue-400">{category}</span>
      </h3>
      <h3 className="text-lg text-gray-300">
        Current page: <span className="text-yellow-400">{page}</span> /{' '}
        {totalPages}
      </h3>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSearchParams({ category: 'Electronics', page })}
          className="rounded-lg bg-blue-500 px-4 py-2 font-medium shadow-md transition hover:bg-blue-600 active:scale-95"
        >
          Electronics
        </button>
        <button
          onClick={() => setSearchParams({ category: 'Clothing', page })}
          className="rounded-lg bg-green-500 px-4 py-2 font-medium shadow-md transition hover:bg-green-600 active:scale-95"
        >
          Clothing
        </button>
        <button
          onClick={() => setSearchParams({ category: 'Books', page })}
          className="rounded-lg bg-purple-500 px-4 py-2 font-medium shadow-md transition hover:bg-purple-600 active:scale-95"
        >
          Books
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="rounded-lg bg-gray-600 px-4 py-2 font-medium shadow-md transition hover:bg-gray-700 active:scale-95"
        >
          Reset
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {currentItems.length > 0 ? (
          currentItems.map((item, i) => (
            <div
              key={i}
              className="rounded-lg bg-gray-700 p-4 text-center shadow transition hover:bg-gray-600"
            >
              {item}
            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-400">No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex space-x-4">
        <button
          onClick={() =>
            setSearchParams({ category, page: Math.max(1, page - 1) })
          }
          disabled={page <= 1}
          className="rounded-lg bg-yellow-500 px-4 py-2 font-medium shadow-md transition hover:bg-yellow-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setSearchParams({ category, page: Math.min(totalPages, page + 1) })
          }
          disabled={page >= totalPages}
          className="rounded-lg bg-red-500 px-4 py-2 font-medium shadow-md transition hover:bg-red-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
