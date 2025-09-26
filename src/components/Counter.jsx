import useCounterStore from '../store/useCounterStore';

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-gray-800 p-6 text-white shadow-md">
      {/* Counter value */}
      <h1 className="text-5xl font-bold text-indigo-400">{count}</h1>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={increase}
          className="rounded-lg bg-green-500 px-4 py-2 text-white shadow hover:bg-green-600"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="rounded-lg bg-red-500 px-4 py-2 text-white shadow hover:bg-red-600"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;
