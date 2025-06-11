export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-10 text-white">
      <div className="w-full max-w-sm space-y-4">
        <div className="rounded-lg border border-gray-500 bg-slate-800 p-6 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-300">
          <label className="block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded border border-gray-700 bg-slate-700 p-2 outline-none focus:border-green-400 focus:ring-2 focus:ring-green-200"
            placeholder="you@example.com"
          />
        </div>
      </div>
    </div>
  );
}
