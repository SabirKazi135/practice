import useTodoStore from '../store/todoStore';

function TodoStats() {
  const completedCount = useTodoStore((state) => state.completedCount());
  const pendingCount = useTodoStore((state) => state.pendingCount());
  const totalTodos = useTodoStore((state) => state.todos.length);

  return (
    <div className="mt-6 w-full rounded-lg bg-white p-4 shadow-md">
      <p className="text-center text-lg font-semibold text-gray-700">
        ✅ Completed <span className="text-green-600">{completedCount}</span> of{' '}
        <span className="text-blue-600">{totalTodos}</span> todos and pending{' '}
        <span>{pendingCount}</span>
      </p>
    </div>
  );
}

export default TodoStats;
