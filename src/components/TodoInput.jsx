import useTodoStore from '../components/TodoList';
import { useState } from 'react';
function TodoInput() {
    const [text, setText] = useState("");
    const [id, setId] = useState(null);
  const addTodo = useTodoStore((state) => state.addTodo);
  return (
    <div>
      <input type="number" />
      <input type="text" />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
