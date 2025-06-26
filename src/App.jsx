import { useState, useEffect } from 'react';

export default function App() {
  const [userName, setUserName] = useState('guess');
  useEffect(() => {
    console.log('userName changed to ', userName);
  }, [userName]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="space-x-4">
        <p>Username: {userName}</p>
        <button onClick={() => setUserName('Raees')}>Raees</button>
        <button onClick={() => setUserName('Sabir')}>Sabir</button>
      </div>
    </div>
  );
}
