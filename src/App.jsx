export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-10 text-white">
      <ul className="w-40 bg-slate-700 p-3">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((item, index) => (
          <li
            key={index}
            className="px-4 py-1 text-purple-600 first:pt-2 first:text-red-400 last:pb-2 last:text-blue-400 odd:bg-gray-300 even:bg-white"
          >
            list {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
