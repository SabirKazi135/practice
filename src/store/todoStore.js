import { create } from 'zustand';

const useTodoStore = create((set, get) => ({
  todos: [],

  addTodo: (id, text) => {
    const newTodo = { id, text, done: false };
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

  completedCount: () => get().todos.filter((t) => t.done).length,
}));

export default useTodoStore;
