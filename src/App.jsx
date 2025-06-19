export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-800 p-10 text-white">
      {/* 🔹 No [open] styling */}
      <details className="w-80 rounded border border-white p-4">
        <summary className="cursor-pointer text-lg">
          🔹 No [open] styling
        </summary>
        <p className="mt-2 text-white/80">This always looks the same.</p>
      </details>

      {/* 🔸 With visible [open] styling on <summary> */}
      <details className="[open]>summary:bg-purple-800 [open]>summary:text-white w-80 rounded border border-white p-0 transition-all duration-300">
        <summary className="cursor-pointer p-4 text-lg">
          🔸 Styled when open
        </summary>
        <p className="mt-2 px-4 pb-4 text-white/80">
          Now you can clearly see the background + text change when open.
        </p>
      </details>
    </div>
  );
}
