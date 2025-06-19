export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-10 text-white">
      {/* 🔹 No orientation-based styling */}
      <div className="rounded bg-gray-300 px-4 py-2 text-black">
        🔹 No orientation: Always gray
      </div>

      {/* 🔸 Responsive to screen orientation */}
      <div className="rounded bg-green-400 px-4 py-2 portrait:bg-pink-500 landscape:bg-blue-600">
        🔸 Orientation-aware:
        <br />
        - Pink in portrait 📱
        <br />- Blue in landscape 🖼️
      </div>

      <div className="roun bg-gray-300 px-4 py-2 text-black">
        No orientation styling
      </div>

      <div>Orientation Styling</div>
    </div>
  );
}
