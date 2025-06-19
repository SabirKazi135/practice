export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 p-10 text-white">
      {/* 🔹 Without motion-reduce — always animates */}
      <div className="animate-bounce rounded bg-blue-600 px-4 py-2">
        🔹 Always Bouncing
      </div>

      {/* 🔸 With motion-reduce fallback — disables animation if OS setting is enabled */}
      <div className="animate-bounce rounded bg-green-600 px-4 py-2 motion-reduce:animate-none">
        🔸 Stops Bouncing (if prefers-reduced-motion is ON)
      </div>
    </div>
  );
}
