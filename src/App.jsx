import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-10">
      <input
        readOnly
        value="Can't change this"
        className="border-2 p-2 read-only:bg-gray-200"
      />
    </div>
  );
}
