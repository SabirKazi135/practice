import useCounterStore from './store/userStore';

function Counter() {
  // ✅ Destructure what you need from the store
  const { count, increment, decrement } = useCounterStore();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Count: {count}</h1>

      {/* Increment button */}
      <button
        onClick={increment}
        style={{
          margin: '5px',
          padding: '10px',
          background: 'green',
          color: 'white',
        }}
      >
        +1
      </button>

      {/* Decrement button */}
      <button
        onClick={decrement}
        style={{
          margin: '5px',
          padding: '10px',
          background: 'red',
          color: 'white',
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;
