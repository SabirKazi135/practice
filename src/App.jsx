import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState(null);

  function onClick() {
    setInput(null)
  }

  function deleteChar() {
    if (input.length > 0) {
      
      setInput(input.substring(0, input.length - 1))
    }
  }
  return (
    <div>
      <main>
        <section>{input}</section>
        <section>
          <button onClick={clear}>AC</button>
          <button onClick={deleteChar}>DE</button>
          <button onClick={}>.</button>
          <button onClick={}>/</button>
          <button onClick={}>7</button>
          <button onClick={}>8</button>
          <button onClick={}>9</button>
          <button onClick={}>*</button>
          <button onClick={}>4</button>
          <button onClick={}>5</button>
          <button onClick={}>6</button>
          <button onClick={}>-</button>
          <button onClick={}>1</button>
          <button onClick={}>2</button>
          <button onClick={}>3</button>
          <button onClick={}>+</button>
          <button onClick={}>00</button>
          <button onClick={}>0</button>
          <button onClick={}>=</button>
        </section>
      </main>
    </div>
  );
}
