import TodoInput from './components/TodoInput';
function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-900 p-6 text-gray-100">
      <h1 className="mb-6 text-4xl font-bold">My Todo App</h1>
      <TodoInput />
    </div>
  );
}

export default App;
