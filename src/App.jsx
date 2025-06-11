export default function App() {
  return (
    <div className="h-screen bg-slate-900 p-6 text-white">
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Active State Example</h1>

        <button className="rounded bg-purple-500 px-6 py-2 text-white transition-all duration-200 hover:bg-purple-600 active:bg-purple-700">
          Press Me
        </button>

        <button className="rounded bg-green-500 px-6 py-2 text-white transition-transform duration-150 hover:scale-105 active:scale-95">
          Scale On Active
        </button>
      </div>
      <div className="space-y-6">
        <button className="t rounded bg-purple-500 px-6 py-2">Press Me</button>

        <button className="ransition-transform duration-150 hover:scale-105 active:scale-95">
          Scale On Active
        </button>
      </div>
    </div>
  );
}
