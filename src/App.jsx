import { useState } from 'react';

export default function App() {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="h-screen bg-slate-900 p-6 text-white">
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Disabled State Example</h1>

        <button
          className="rounded bg-blue-500 px-4 py-2 transition-all disabled:cursor-not-allowed disabled:bg-gray-500"
          disabled={isDisabled}
        >
          Submit
        </button>

        <button
          onClick={() => setIsDisabled(!isDisabled)}
          className="rounded bg-green-500 px-4 py-2"
        >
          Toggle Disabled
        </button>
      </div>
      <div className="space-y-6">
        <h1>Disable State Example</h1>
        <button
          disabled={true}
          className="rounded bg-blue-500 px-4 py-2 transition-all disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          Submit
        </button>
        <button>
          Toggle Disabled
        </button>
      </div>
    </div>
  );
}
