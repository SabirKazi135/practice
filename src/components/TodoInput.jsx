import { useState } from 'react';
import useTodoStore from '../store/todoStore';

function TodoInput() {
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (text.trim() === '' || id === '') return;
    addTodo(Number(id), text);
    setText('');
    setId('');
  };

  return (
    <div className="mb-6 flex w-full max-w-lg items-center justify-center space-x-3">
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="w-20 rounded-lg border border-gray-300 px-3 py-2 text-center text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="text"
        placeholder="Enter your todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-gray-900 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handleAdd}
        className="transform rounded-lg bg-indigo-600 px-4 py-2 text-white shadow transition hover:scale-105 hover:bg-indigo-700"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
