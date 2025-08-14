import { useParams } from 'react-router-dom';

function UserSettings() {
  const { userName } = useParams();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-lg bg-gray-800 p-6 shadow-lg">
      <h1 className="mb-4 text-3xl font-bold text-blue-400">
        Settings for {userName}
      </h1>
      <p className="text-gray-300">
        Here you can manage preferences and account settings for{' '}
        <span className="font-semibold text-blue-300">{userName}</span>.
      </p>
    </div>
  );
}

export default UserSettings;
