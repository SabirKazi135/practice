export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[] bg-slate-900 p-10 text-white">
      <ul className="w-40 bg-slate-700 p-3">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className="bg-white px-4 py-2 text-purple-600 outline-none hover:bg-yellow-300 focus:bg-green-400 active:bg-red-500"
            tabIndex={0} // for focus to work
          >
            list {index + 1}
          </li>
        ))}
      </ul>

      <div className="rounded-[10px] p-4 text-white">Random BG Color</div>
    </div>
  );
}

