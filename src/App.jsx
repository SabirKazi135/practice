export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-gray-900 p-10 text-white">
      {/* 🔹 LTR (default) */}
      <div
        dir="ltr"
        className="w-80 rounded border border-white bg-gray-800 p-4"
      >
        <h2 className="mb-2 text-lg font-bold">🔹 English (LTR)</h2>
        <p className="[dir='rtl']:text-right">
          This text is aligned left by default.
        </p>
      </div>

      {/* 🔸 RTL (Arabic/Urdu layout) */}
      <div
        dir="rtl"
        className="w-80 rounded border border-white bg-gray-800 p-4"
      >
        <h2 className="mb-2 text-lg font-bold">🔸 Arabic/Urdu (RTL)</h2>
        <p className="[dir='rtl']:text-right [dir='rtl']:text-yellow-400">
          هذا النص باللغة العربية ويجب أن يكون من اليمين إلى اليسار.
        </p>
      </div>
    </div>
  );
}
