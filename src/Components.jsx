import { useUserContext } from './context.jsx';

export function Sidebar() {
  const user = useUserContext();

  return (
    <div className="w-1/4 bg-gray-800 p-6 text-white">
      <h2 className="mb-4 text-xl font-bold">Sidebar</h2>
      <p className="text-lg">Name: {user.name}</p>
      <p className="mt-2 text-sm">
        Subscription Status: {user.isSubscribed ? 'Active' : 'Inactive'}
      </p>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();

  return (
    <div className="flex-1 bg-white p-6 text-gray-900">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <p className="mt-4">Welcome back, {user.name}!</p>
    </div>
  );
}
