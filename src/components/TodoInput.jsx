import { useState } from 'react';
import useTodoStore from '../store/todoStore';

function TodoInput() {
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (text.trim() === '' || id === '') return; // require both ID and text
    addTodo(Number(id), text);
    setText(''); // clear text input
    setId(''); // optional: clear ID input
  };

  return (
    <div className="mb-4 flex items-center space-x-2">
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-20 rounded-lg bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        placeholder="Todo text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-64 rounded-lg bg-gray-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={handleAdd}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-white shadow transition hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
