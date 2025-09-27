// store/counterStore.js
import { create } from 'zustand';

// Logger middleware
const logger = (config) => (set, get, api) =>
  config(
    (args, ...rest) => {
      console.log('📋 Before:', get().count); // state before update
      set(args, ...rest); // normal update
      console.log('✅ After:', get().count); // state after update
      console.log('---------------------------');
    },
    get,
    api,
  );

// Store with middleware and console logs in actions
const useCounterStore = create(
  logger((set, get) => ({
    count: 0,
    name: 'sabir',

    // increment action
    increment: () =>
      set((state) => {
        console.log('🟢 increment called, current count:', state.count);
        return { count: state.count + 1 };
      }),

    // decrement action
    decrement: () =>
      set((state) => {
        console.log('🔴 decrement called, current count:', state.count);
        return { count: state.count - 1 };
      }),
  })),
);

export default useCounterStore;
