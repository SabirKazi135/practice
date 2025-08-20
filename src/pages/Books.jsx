export default function Books() {
  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center space-y-4 rounded-xl bg-purple-800 p-6 text-white shadow-lg">
      <h2 className="text-2xl font-bold">Books Category</h2>
      <p className="text-gray-200">
        This is the <span className="font-semibold text-yellow-300">Books</span>{' '}
        section. Discover stories, knowledge, and imagination here.
      </p>
    </div>
  );
}
