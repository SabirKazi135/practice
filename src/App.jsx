export default function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-900 p-10 text-white">
      <div>
        <div className="group relative w-64 rounded-lg bg-slate-800 p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-700">
          <h2 className="text-lg font-semibold transition-colors group-hover:text-green-400">
            Hover the Card
          </h2>
          <p className="text-sm text-gray-300">This text stays the same.</p>

          <button className="absolute right-4 top-4 hidden rounded bg-green-600 px-3 py-1 text-sm group-hover:block">
            Action
          </button>
        </div>
      </div>
      <div>
        <div className="group relative w-64 rounded-lg bg-slate-800 p-6 transition-all duration-300 hover:scale-105 hover:bg-slate-700">
          <h2 className="text-lg font-semibold transition-colors group-hover:text-green-400">
            Hover
          </h2>
          <p className="text-sm text-gray-300">This text stays the same.</p>
          <button className="absolute right-4 top-4 hidden rounded bg-green-600 px-3 py-1 text-sm group-hover:block">
            Action
          </button>
        </div>
      </div>
    </div>
  );
}
