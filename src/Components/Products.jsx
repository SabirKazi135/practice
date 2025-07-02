import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="space-y-4 p-4">
      {/* Search Input */}
      <div>
        <input
          type="search"
          placeholder="Search Products"
          className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-4 text-white">
        <Link
          to="featured"
          className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          Featured
        </Link>
        <Link
          to="new"
          className="rounded bg-green-600 px-4 py-2 hover:bg-green-700"
        >
          New
        </Link>
      </nav>
    </div>
  );
}

export default Products;
