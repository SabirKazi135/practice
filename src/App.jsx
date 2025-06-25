import { useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  return (
    <div className="min-h-screen bg-gray-700 p-6">
      <div className="mx-auto max-w-3xl rounded-xl bg-gray-400 p-6 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-blue-700">
          📦 Data Fetching in React
        </h1>

        <div className="mb-4 flex items-center gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            className="rounded bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300 disabled:opacity-50"
            disabled={page === 0}
          >
            ⬅ Prev
          </button>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"
          >
            ➕ Next Page ({page + 1})
          </button>
        </div>

        {isLoading ? (
          <div className="text-center font-medium text-blue-600">
            Loading...
          </div>
        ) : (
          <ul className="list-inside list-disc space-y-2 text-gray-800">
            {posts.map((post) => (
              <li
                key={post.id}
                className="rounded border border-gray-200 bg-gray-50 p-3 shadow-sm hover:bg-blue-50"
              >
                {post.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
