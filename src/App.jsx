import { useState } from 'react';
import { initialItems } from './utils';

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="space-y-4 rounded-xl bg-gray-800 p-8 shadow-lg">
        <h1 className="text-2xl font-semibold">Count: {count}</h1>
        <h1 className="text-xl">Selected Item: {selectedItem?.id}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
