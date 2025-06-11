import { useState } from 'react';

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [check2, setChecked2] = useState(false);

  return (
    <div className="h-screen space-y-6 bg-slate-900 p-8 text-white">
      <div className="space-y-6">
        <h1 className="text-xl font-bold">Checked State Example</h1>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-5 w-5 rounded border border-gray-300 checked:border-green-700 checked:bg-green-500 checked:ring-2 checked:ring-green-300"
          />
          <span>{isChecked ? 'Checked!' : 'Not Checked'}</span>
        </label>
      </div>
      <div className="space-y-6">
        <label htmlFor="" className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={check2}
            onChange={() => setChecked2(!check2)}
            className="h-5 w-5 rounded border-gray-300 checked:border-green-700 checked:bg-green-500 checked:ring-2 checked:ring-green-500"
          />
          <span>{check2 ? 'Checked 2' : 'not Checked 2'}</span>
        </label>
      </div>
    </div>
  );
}
