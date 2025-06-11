export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-10 text-white">
      <div className="w-full max-w-sm space-y-6">
        {/* Card with group */}
        <div className="group rounded-lg border border-gray-600 bg-slate-800 p-6 transition-all group-focus-within:border-green-400 group-focus-within:ring-2 group-focus-within:ring-green-200">
          <label className="text-sm text-gray-300">Your Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="mt-1 w-full rounded border border-gray-700 bg-slate-700 p-2 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
          />
        </div>
      </div>
    </div>
  );
}
