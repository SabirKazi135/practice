import { useMemo, useState } from 'react';
import { initialItems } from './utils';

function Demo() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.isSelected);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div>
        <h1>Count: {count}</h1>
        <h1>Selected Item: {selectedItem?.id}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default Demo;
