import useTodoStore from '../store/todoStore';

function TodoStats() {
  const completedCount = useTodoStore((state) => state.completedCount());
  
  return (
    <div>
      <p>Completed of todos</p>
    </div>
  );
}

export default TodoStats;
