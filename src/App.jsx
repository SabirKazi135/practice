import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState('home');
  const [selected2, setSelected2] = useState('home');

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-10 text-white">
      <div className="space-y-10">
        <div className="flex gap-4">
          {/* Home Tab */}
          <button
            onClick={() => setSelected('home')}
            aria-selected={selected === 'home'}
            className="rounded px-4 py-2 transition-all hover:bg-slate-600 aria-selected:bg-green-600 aria-selected:font-bold aria-selected:ring-2 aria-selected:ring-green-400"
          >
            Home
          </button>

          {/* About Tab */}
          <button
            onClick={() => setSelected('about')}
            aria-selected={selected === 'about'}
            className="rounded px-4 py-2 transition-all hover:bg-slate-600 aria-selected:bg-green-600 aria-selected:font-bold aria-selected:ring-2 aria-selected:ring-green-400"
          >
            About
          </button>

          {/* Contact Tab */}
          <button
            onClick={() => setSelected('contact')}
            aria-selected={selected === 'contact'}
            className="rounded px-4 py-2 transition-all hover:bg-slate-600 aria-selected:bg-green-600 aria-selected:font-bold aria-selected:ring-2 aria-selected:ring-green-400"
          >
            Contact
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setSelected2('home')}
            aria-selected={selected2 === 'home'}
            className="rounded px-4 py-2 transition-all hover:bg-slate-600 aria-selected:bg-green-600 aria-selected:font-bold aria-selected:ring-green-400"
          >
            Home
          </button>
          <button
            onClick={() => setSelected2('about')}
            aria-selected={selected2 === 'about'}
            className="rounded px-4 py-2 transition-all hover:bg-slate-600 aria-selected:bg-green-600 aria-selected:font-bold aria-selected:ring-green-400"
          >
            About
          </button>
          <button
            onClick={() => setSelected2('contact')}
            aria-selected={selected2 === 'contact'}
            className="rounded px-4 py-2 transition-all hover:bg-slate-600 aria-selected:bg-green-600 aria-selected:font-bold aria-selected:ring-green-400"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
