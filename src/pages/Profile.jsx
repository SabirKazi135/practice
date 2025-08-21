// src/pages/Profile.jsx
function Profile() {
  const username = localStorage.getItem('username') || 'Guest';

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center space-y-6 rounded-xl bg-gray-800 p-6 text-white shadow-lg">
      <h2 className="text-3xl font-bold">Profile</h2>

      <p className="text-lg text-gray-300">
        Welcome,{' '}
        <span className="font-semibold text-yellow-400">{username}</span> 🎉
      </p>

      <div className="w-full max-w-md space-y-4 rounded-lg bg-gray-700 p-4 shadow-md">
        <p className="text-gray-300">📧 Email: user@example.com</p>
        <p className="text-gray-300">📍 Location: India</p>
        <p className="text-gray-300">⭐ Membership: Free User</p>
      </div>
    </div>
  );
}

export default Profile;
