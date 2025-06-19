import { useState } from 'react';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-500 p-10">
      <p className="relative before:mr-2 before:text-green-600 before:content-['✅']">
        Task Completed
      </p>
    </div>
  );
}
