export default function Electronics() {
  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center space-y-4 rounded-xl bg-blue-800 p-6 text-white shadow-lg">
      <h2 className="text-2xl font-bold">Electronics Category</h2>
      <p className="text-gray-200">
        This is the{' '}
        <span className="font-semibold text-yellow-300">Electronics</span>{' '}
        section. Find gadgets, devices, and modern tech here.
      </p>
    </div>
  );
}
