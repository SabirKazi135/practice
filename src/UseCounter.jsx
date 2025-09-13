import useStore from './Counter';

function UseCounter() {
  const count = useStore((state) => state.count);
  const inc = useStore((state) => state.inc);
  const dec = useStore((state) => state.dec);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="mb-6 text-3xl font-bold">Zustand Counter</h1>

      <p className="mb-4 text-2xl font-semibold">Count: {count}</p>

      <div className="flex space-x-4">
        <button
          onClick={dec}
          className="rounded-lg bg-red-600 px-4 py-2 shadow-md transition hover:bg-red-700"
        >
          -
        </button>

        <button
          onClick={inc}
          className="rounded-lg bg-green-600 px-4 py-2 shadow-md transition hover:bg-green-700"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default UseCounter;
