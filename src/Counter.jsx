import { create } from 'zustand';

const useStore = create((set, get) => ({
  count: 0,

  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
