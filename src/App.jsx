import { useState } from 'react';

export default function App() {
  const [pressed, setPressed] = useState(false);
  const [pressed2, setPressed2] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-900 text-white">
      <button
        aria-pressed={pressed}
        onClick={() => setPressed(!pressed)}
        className="rounded bg-slate-700 px-6 py-2 text-white transition-all hover:bg-slate-600 aria-pressed:bg-green-600 aria-pressed:ring-2 aria-pressed:ring-green-400"
      >
        {pressed ? 'Pressed' : 'Unpressed'}
      </button>

      <button
        aria-pressed={pressed}
        onClick={() => setPressed2(!pressed2)}
        className="rounded bg-slate-700 px-6 py-2 text-white transition-all hover:bg-slate-600"
      >
        {pressed2 ? 'Pressed' : 'Unpressed'}
      </button>
    </div>
  );
}
