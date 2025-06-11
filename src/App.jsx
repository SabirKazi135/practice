export default function App() {
  return (
    <div className="h-screen space-y-4 bg-slate-800 p-8">
      <input
        type="text"
        class="rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <br />

      <input
        type="text"
        className="rounded border border-gray-300 focus:outline-none"
      />
    </div>
  );
}
