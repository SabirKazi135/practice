import { useState } from 'react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-8 text-white">
      <div className="w-full max-w-sm space-y-4">
        <div className="relative">
          {/* Password Input */}
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            className="w-full rounded border border-gray-600 bg-slate-800 p-3 pr-10 text-white outline-none focus:border-green-500"
          />

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
    </div>
  );
}
