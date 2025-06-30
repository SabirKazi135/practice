import { useState, memo } from 'react';

// Styled Search Component
function Search({ onChange }) {
  console.log('Search rendered!');

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-md rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

const MemoizedSearch = memo(Search);

// App Component
export default function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6 text-white">
      <h1 className="mb-4 text-2xl font-semibold">🔍 Search App</h1>

      <MemoizedSearch onChange={setQuery} />

      <p className="mt-4">
        You are searching for: <span className="font-medium">{query}</span>
      </p>
    </div>
  );
}
