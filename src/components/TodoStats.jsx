import useTodoStore from '../store/todoStore';

function TodoStats() {
  const completedCount = useTodoStore((state) => state.completedCount());
  const totalTodos = useTodoStore((state) => state.todos.lenght);

  return (
    <div>
      <p>
        Completed {completedCount} of {totalTodos} todos
      </p>
    </div>
  );
}

export default TodoStats;
