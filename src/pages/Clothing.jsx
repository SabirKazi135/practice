export default function Clothing() {
  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center space-y-4 rounded-xl bg-green-800 p-6 text-white shadow-lg">
      <h2 className="text-2xl font-bold">Clothing Category</h2>
      <p className="text-gray-200">
        This is the{' '}
        <span className="font-semibold text-yellow-300">Clothing</span> section.
        Explore the latest fashion, styles, and trends here.
      </p>
    </div>
  );
}
