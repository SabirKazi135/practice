export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 p-10">
      <div className="group relative w-80 overflow-hidden rounded-xl bg-slate-800 shadow-lg transition-all duration-300 hover:scale-105">
        {/* Product Image */}
        <img
          src="https://source.unsplash.com/400x300/?shoes"
          alt="Product"
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay appears on hover */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black/50 transition-all duration-300 group-hover:flex">
          <button className="rounded bg-green-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-green-700">
            View Details
          </button>
        </div>

        {/* Text content */}
        <div className="p-4 text-white">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-green-400">
            Nike Air Max 2025
          </h3>
          <p className="text-sm text-gray-400 transition-opacity duration-300 group-hover:opacity-70">
            Lightweight, stylish and ultra comfortable.
          </p>
        </div>
      </div>
    </div>
  );
}
