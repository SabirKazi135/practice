export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-900 p-10 text-white">
      <button className="text-4xl">Fixed Text</button>
      <button className="text-4xl sm:text-lg md:text-xl">Adaptive Text</button>
    </div>
  );
}
