import { useState } from 'react';

export default function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-10 text-white">
      <div className="w-full max-w-sm space-y-4">
        {/* Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="w-full rounded bg-slate-700 px-4 py-2 text-left transition-all hover:bg-slate-600 aria-expanded:bg-green-600 aria-expanded:ring-2 aria-expanded:ring-green-400"
        >
          {expanded ? 'Collapse ↑' : 'Expand ↓'}
        </button>

        {/* Content Panel */}
        {expanded && (
          <div className="rounded border border-green-500 bg-slate-800 p-4 transition-all duration-300">
            <p>This is the content inside the expanded panel.</p>
          </div>
        )}
      </div>
    </div>
  );
}
