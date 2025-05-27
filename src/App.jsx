import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');

  function clear() {
    setInput('');
  }

  function deleteChar() {
    if (input === 'Error') {
      setInput('');
    } else if (input.length > 0) {
      setInput(input.substring(0, input.length - 1));
    }
  }

  function addChar(char) {
    if (input === 'Error') {
      setInput(char);
    } else {
      setInput((prev) => prev + char);
    }
  }

  function calculate() {
    if (input === 'Error') {
      return;
    }
    try {
      setInput(String(eval(input)));
    } catch {
      setInput('Error');
    }
  }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-600">
      <main className="bg-primary text-secondary border-secondary rounded-2xl border-[3px] p-4 shadow-xl">
        <section className="text-secondary h-12 overflow-auto text-[40px] tracking-[1px]">
          {input}
        </section>
        <section className="grid grid-cols-4">
          <button className="" onClick={clear}>
            AC
          </button>
          <button className="" onClick={deleteChar}>
            DE
          </button>
          <button className="" onClick={() => addChar('.')}>
            .
          </button>
          <button className="" onClick={() => addChar('/')}>
            /
          </button>
          <button className="" onClick={() => addChar('7')}>
            7
          </button>
          <button className="" onClick={() => addChar('8')}>
            8
          </button>
          <button className="" onClick={() => addChar('9')}>
            9
          </button>
          <button className="" onClick={() => addChar('*')}>
            *
          </button>
          <button className="" onClick={() => addChar('4')}>
            4
          </button>
          <button className="" onClick={() => addChar('5')}>
            5
          </button>
          <button className="" onClick={() => addChar('6')}>
            6
          </button>
          <button className="" onClick={() => addChar('-')}>
            -
          </button>
          <button className="" onClick={() => addChar('1')}>
            1
          </button>
          <button className="" onClick={() => addChar('2')}>
            2
          </button>
          <button className="" onClick={() => addChar('3')}>
            3
          </button>
          <button className="" onClick={() => addChar('+')}>
            +
          </button>
          <button className="" onClick={() => addChar('00')}>
            00
          </button>
          <button className="" onClick={() => addChar('0')}>
            0
          </button>
          <button className="" onClick={calculate}>
            =
          </button>
        </section>
      </main>
    </div>
  );
}
