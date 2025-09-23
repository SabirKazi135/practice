import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useTodoStore = create(
  devtools(
    persist((set, get) => ({
      todos: [
        { id: 1, text: 'Learn Zustand basics', done: false },
        { id: 2, text: 'Build Todo App', done: true },
        { id: 3, text: 'Add Tailwind styling', done: false },
        { id: 4, text: 'Share project in public', done: false },
      ],

      addTodo: (id, text) => {
        const newTodo = { id, text, done: false };
        set((state) => ({ todos: [...state.todos, newTodo] }));
      },

      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo,
          ),
        }));
      },

      completedCount: () => get().todos.filter((t) => t.done).length,
      pendingCount: () => get().todos.filter((t) => t.done === false).length,
    })),
  ),
);

export default useTodoStore;
