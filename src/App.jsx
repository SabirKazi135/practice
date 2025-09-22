import useCounterStore from './store/counterStore';

const App = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-100">
      <h1 className="mb-6 text-3xl font-bold">Count: {count}</h1>

      <div className="flex space-x-4">
        <button
          onClick={decrease}
          className="rounded-lg bg-red-600 px-4 py-2 text-white shadow transition hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={increase}
          className="rounded-lg bg-green-600 px-4 py-2 text-white shadow transition hover:bg-green-700"
        >
          +
        </button>
        <button
          onClick={reset}
          className="rounded-lg bg-gray-600 px-4 py-2 text-white shadow transition hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
