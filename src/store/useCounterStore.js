import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0, // initial count
  increase: () =>
    set((state) => {
      const newCount = state.count + 1;
      console.log('Increasing count to', newCount); // this shows
      return { count: newCount }; // this triggers subscription
    }),

  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
