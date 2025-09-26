// src/logger.js
import { useCounterStore } from './store/counterStore';

// One-argument subscription: runs whenever any state changes
useCounterStore.subscribe((state) => {
  console.log('Store changed:', state.count);
});
