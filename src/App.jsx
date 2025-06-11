export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-8 text-white">
      <div className="relative w-full max-w-sm space-y-4">
        {/* Hidden checkbox peer */}
        <input type="checkbox" id="togglePass" className="peer sr-only" />

        {/* Password Input */}
        <input
          type="password"
          className="w-full rounded border border-gray-600 bg-slate-800 p-3 text-white peer-checked:hidden"
          placeholder="Password"
        />
        <input
          type="text"
          className="hidden w-full rounded border border-gray-600 bg-slate-800 p-3 text-white peer-checked:block"
          placeholder="Password (Visible)"
        />

        {/* Toggle Label */}
        <label
          htmlFor="togglePass"
          className="absolute right-4 top-3 cursor-pointer text-sm text-gray-400 hover:text-white"
        >
          👁 Show
        </label>
      </div>
    </div>
  );
}
