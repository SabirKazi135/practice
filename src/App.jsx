export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-slate-800 p-10 text-white">
      <button
        disabled={true}
        className="rounded bg-green-400 px-4 py-2 outline-none transition-transform duration-300 hover:scale-105 hover:bg-green-500 active:scale-95 active:bg-green-600 disabled:transform-none disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Click Me
      </button>
      <div className="group h-40 w-40 bg-gray-500 hover:scale-110">
        <button className="rounded px-4 py-2 group-hover:bg-green-500">
          Click me
        </button>
      </div>
    </div>
  );
}
