import { useCallback, useState } from 'react';
import { shuffle } from '@/utils';
import Search from './Search';

const allUsers = ['john', 'alex', 'george', 'simon', 'james'];

export default function App() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) =>
        user.toLowerCase().includes(text.toLowerCase()),
      );
      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-gray-900 p-6 text-white">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={() => setUsers(shuffle(allUsers))}
          className="rounded bg-blue-600 px-4 py-2 text-gray-100 transition hover:bg-blue-700"
        >
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>

      <ul className="list-inside list-disc space-y-1">
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
