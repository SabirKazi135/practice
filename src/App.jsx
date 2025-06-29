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
      <h1>Hello World</h1>
    </div>
  );
}
