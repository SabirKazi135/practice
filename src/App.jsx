import { useReducer } from 'react';

// function reducer(state, action) {
//   const { type } = action;

//   switch (type) {
//     case 'increment': {
//       const newCount = state.count + 1;
//       const hasError = newCount > 5;
//       return {
//         ...state,
//         count: hasError ? state.count : newCount,
//         error: hasError ? 'Maximum reached' : null,
//       };
//     }
//     case 'decrement': {
//       const newCount = state.count - 1;
//       const hasError = newCount < 0;
//       return {
//         ...state,
//         count: hasError ? state.count : newCount,
//         error: hasError ? 'Minimum reached' : null,
//       };
//     }
//     default:
//       return state;
//   }
// }

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case 'increment': {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Maximum count' : null,
      };
    }
    case 'decrement': {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'Minimum count' : null,
      };
    }

    default:
      return state;
  }
}
export default function App() {
  // const [state, dispatch] = useReducer(reducer, {
  //   count: 0,
  //   error: null,
  // });

  const [state, dipatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white">
      {/* <div className="w-full max-w-sm space-y-4 rounded-2xl bg-gray-800 p-6 text-center shadow-lg">
        <h1 className="text-2xl font-semibold">useReducer Counter</h1>
        <div className="text-xl">Count: {state.count}</div>
        {state.error && <div className="text-red-500">{state.error}</div>}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch({ type: 'increment' })}
            className="rounded-xl bg-blue-600 px-4 py-2 transition hover:bg-blue-700"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'decrement' })}
            className="rounded-xl bg-red-600 px-4 py-2 transition hover:bg-red-700"
          >
            Decrement
          </button>
        </div>
      </div> */}
      <div>
        <h1>useReducer Counter</h1>
        <div>Count: {state.count}</div>
        {state.error && <div className="text-red-500">{state.error}</div>}
        <button onClick={() => dipatch({ type: 'increment' })}>
          increment
        </button>
        <button onClick={() => dipatch({ type: 'decrement' })}>
          decrement
        </button>
      </div>
    </div>
  );
}
