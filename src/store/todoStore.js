import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],

  addTodo: (id, text) => {
    const newTodo = { id: id, text, done: false };
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }));
  },
}));

export default useTodoStore;
