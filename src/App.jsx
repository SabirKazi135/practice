import UserList from './components/UserList';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-2xl rounded-2xl bg-gray-800 p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">User Directory</h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
