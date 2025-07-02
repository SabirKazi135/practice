import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAsync } from '../state/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-xs space-y-4 text-center">
      <h2 className="text-4xl font-semibold text-blue-700">{count}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => dispatch(incrementAsync(10))}
          className="rounded-xl bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
        >
          + Async 10
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          -1
        </button>
      </div>
    </div>
  );
}
