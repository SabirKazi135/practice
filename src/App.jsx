import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-6">
      <h1 className="mb-6 text-center text-4xl font-bold tracking-wide text-gray-900">
        Todo App
      </h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
