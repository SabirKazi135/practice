export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 p-10 text-white">
      {/* 🟥 Without selection styling (default browser blue) */}
      <p className="max-w-md text-lg">
        🔹 Without selection: Highlight this text and you'll see the default
        blue highlight.
      </p>

      {/* 🟩 With Tailwind selection styling */}
      <p className="max-w-md text-lg selection:bg-pink-400 selection:text-white">
        🔸 With selection: Highlight this text and you'll see pink background
        and white text!
      </p>

      <p>This paragraph has default selection styling.</p>
      <p className="selection:bg-green-400 selection:text-black">
        This paragraph has custom selection styling.
      </p>
    </div>
  );
}
