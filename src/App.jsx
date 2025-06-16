import { useState } from 'react';
export default function App() {
  const [touched, setTouched] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-[] bg-slate-900 p-10">
      <form className="space-x-4 space-y-4">
        <input
          type="email"
          required
          onBlur={() => setTouched(true)} // mark as touched
          className={`border-2 px-4 py-2 ${
            touched ? 'invalid:border-red-500' : ''
          }`}
        />
      </form>
    </div>
  );
}
