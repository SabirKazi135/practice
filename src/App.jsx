export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-900 p-8 text-white">
      <div className="space-y-4">
        <div className="space-y-2">
          <input type="checkbox" id="accept" className="peer" />
          <label
            htmlFor="accept"
            className="inline-block cursor-pointer rounded-lg border border-gray-600 bg-slate-800 px-4 py-2 transition-all peer-checked:border-green-500 peer-checked:bg-green-700 peer-checked:text-white"
          >
            Accept Terms and Conditions
          </label>
        </div>

        <div className="text-sm text-gray-400 peer-checked:text-green-400">
          You'll be subscribed to our newsletter when checked.
        </div>
      </div>

      <div>
        <div>
          <input type="checkbox" id="accept2" className="peer" />
          <label
            htmlFor="accept2"
            className="inline-block cursor-pointer rounded-lg border border-gray-600 bg-slate-800 px-4 py-2 transition-all peer-checked:border-r-green-500 peer-checked:bg-green-700 peer-checked:text-white"
          >
            Accept Terms and Conditions
          </label>
        </div>
      </div>
    </div>
  );
}
