import useTodoStore from '../store/todoStore';

function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div className="mx-auto w-full max-w-lg">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">
          No Todos yet. Add one above.
        </p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-5 py-3 shadow-sm transition hover:shadow-md"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer select-none transition-colors ${
                  todo.done
                    ? 'text-gray-400 line-through'
                    : 'text-gray-900 hover:text-indigo-500'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="transform rounded-lg bg-red-500 px-3 py-1 text-white shadow transition hover:scale-105 hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
