import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState(null);

  function onClick() {
    setInput(null);
  }

  function deleteChar() {
    if (input.length > 0) {
      setInput(input.substring(0, input.length - 1));
    }
  }

  function addChar(char) {
    setInput((prev) => prev + char);
  }
  return (
    <div>
      <main>
        <section>{input}</section>
        <section>
          <button onClick={clear}>AC</button>
          <button onClick={deleteChar}>DE</button>
          <button onClick={() => addChar('.')}>.</button>
          <button onClick={() => addChar('/')}>/</button>
          <button onClick={() => addChar('7')}>7</button>
          <button onClick={() => addChar('8')}>8</button>
          <button onClick={() => addChar('9')}>9</button>
          <button onClick={() => addChar('*')}>*</button>
          <button onClick={() => addChar('4')}>4</button>
          <button onClick={() => addChar('5')}>5</button>
          <button onClick={() => addChar('6')}>6</button>
          <button onClick={() => addChar('-')}>-</button>
          <button onClick={() => addChar('1')}>1</button>
          <button onClick={() => addChar('2')}>2</button>
          <button onClick={() => addChar('3')}>3</button>
          <button onClick={() => addChar('+')}>+</button>
          <button onClick={() => addChar('00')}>00</button>
          <button onClick={() => addChar('0')}>0</button>
          <button onClick={() => addChar('=')}>=</button>
        </section>
      </main>
    </div>
  );
}
