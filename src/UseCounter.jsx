import { useStore } from 'zustand';

function UseCounter() {
  const count = useStore((state) => state.count);
  const inc = useStore((state) => state.inc);
  const dec = useStore((state) => state.dec);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default UseCounter;
