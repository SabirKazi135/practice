export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-10">
      <input
        type="text"
        placeholder="Enter your name"
        className="w-72 rounded border border-gray-300 bg-white p-3 text-black placeholder:italic placeholder:text-pink-500 placeholder:opacity-80"
      />
      <input type="text" placeholder="Search here..." />
    </div>
  );
}
