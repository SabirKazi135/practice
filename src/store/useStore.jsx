import { create } from 'zustand';

const useStore = create((set, get) => ({
  name: 'sabir',
  theme: 'dark',
  count: 0,

  setName: (newName) => set({ name: newName }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'light',
    })),

  incCount: () => {
    const currentCount = get().count;
    const newCount = currentCount + 1;

    if (newCount > 5) {
      set({ count: newCount, theme: 'dark' });
    } else {
      set({ count: newCount });
    }
  },

  decCount: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}));

export default useStore;
