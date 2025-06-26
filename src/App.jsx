import { useState, useEffect } from 'react';

export default function App() {
  const [userName, setUserName] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="space-x-4">
        <button onClick={() => changeName('Raees')}>Raees</button>
        <button onClick={() => changeName('Sabir')}>Sabir</button>
      </div>
    </div>
  );
}
