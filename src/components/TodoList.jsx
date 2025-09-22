import useTodoStore from '../store/todoStore';
function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {todo.done ? '(Done)' : '(Not Done)'}
        </li>
      ))}
    </div>
  );
}

export default TodoList;
