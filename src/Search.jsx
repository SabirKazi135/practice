import { memo } from 'react';

function Search({ onChange }) {
  console.log('Search rendered!');

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default memo(Search);
