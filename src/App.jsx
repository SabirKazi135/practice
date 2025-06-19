export default function App() {
  return (
    <div className="dark flex min-h-screen flex-col items-center justify-center gap-6 bg-white p-10 text-black dark:bg-gray-900 dark:text-white">
      {/* 🔹 Always Light Mode styles only */}
      <div className="rounded bg-gray-300 px-4 py-2 text-black">
        🔹 Without `dark:` — Always light background
      </div>

      {/* 🔸 Supports Dark Mode */}
      <div className="rounded bg-gray-200 px-4 py-2 text-black dark:bg-purple-700 dark:text-white">
        🔸 With `dark:` — Light in day, Purple in dark mode
      </div>

      <div className="rounded bg-gray-200 px-4 py-2 text-black ">light even in dark mode</div>
      <div className="rounded bg-gray-200 px-4 py-2 text-black da">switches in dark mode</div>
    </div>
  );
}
