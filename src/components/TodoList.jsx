import useTodoStore from '../store/todoStore';
function TodoList() {
  const todoList = useTodoStore((state) => state.todos);
  return <div></div>;
}

export default TodoList;
