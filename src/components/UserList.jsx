import useUserStore from '../store/userStore';
import { useEffect } from 'react';

function UserList() {
  const users = useUserStore((state) => state.users);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const fetchUsers = useUserStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return (
      <p className="animate-pulse text-center text-blue-400">Loading...</p>
    );
  }
  if (error) {
    return <p className="text-center text-red-400">Error: {error}</p>;
  }

  return (
    <ul className="space-y-3">
      {users.map((u) => (
        <li
          key={u.id}
          className="rounded-lg bg-gray-700 p-4 shadow-md transition hover:bg-gray-600"
        >
          <p className="text-lg font-semibold">{u.name}</p>
          <p className="text-sm text-gray-300">{u.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
