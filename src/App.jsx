import { useEffect, useState, useRef } from 'react';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-400 p-10 font-mono text-white">
      <div className="rounded bg-black p-4 text-[rgb(var(--color-primary)/1)] text-white">
        This uses --color-primary
      </div>
    </div>
  );
}
