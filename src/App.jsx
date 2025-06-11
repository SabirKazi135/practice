export default function App() {
  return (
    <div className="flex h-screen flex-col space-y-4 bg-slate-800 p-8">
      <input
        type="text"
        placeholder="Test hover + focus"
        className="rounded border p-2 text-white hover:bg-slate-700 focus:border-green-500 focus:ring-2 focus:ring-green-300"
      />
      <input
        type="text"
        placeholder="Test hover + focus"
        className="rounded border p-2 text-white hover:bg-slate-700 focus:ring-2 focus:ring-green-300"
      />
    </div>
  );
}
