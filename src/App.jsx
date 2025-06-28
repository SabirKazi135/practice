export default function App() {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center gap-5 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} p-6`}
    >
      <div className="text-4xl font-bold text-red-500"> Count: {count}</div>
      <h1>Hello World</h1>
    </div>
  );
}
