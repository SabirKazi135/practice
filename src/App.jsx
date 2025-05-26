import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState(null);
  const [age, setAge] = useState(null);
  function changeInput(e) {
    setInput(e.target.value);
  }

  function calculateAge() {}
  return (
    <div className="flex h-screen items-center bg-[linear-gradient(-200deg,_#1212b7_0,_#accbe5_100%)]">
      <div className="space-y-8 pl-36 pr-8">
        <header className="">
          <h1 className="font-unbounded text-[40px] font-bold text-white">
            JavaScript
          </h1>
          <h1 className="font-unbounded text-[40px] font-bold text-[#a2ff86]">
            Age Calculator
          </h1>
        </header>
        <section className="flex gap-4 rounded-lg bg-white/30 p-8">
          <input
            type="date"
            className="rounded-md border-none px-3 py-2 font-mono text-base text-black outline-none"
            value={input}
            onChange={changeInput}
          />
          <button
            onClick={calculateAge}
            className="rounded-md border-none bg-[#A2FF86] px-3 py-2 font-sans text-base text-black outline-none"
          >
            Calculate
          </button>
        </section>

        <p>{age} </p>
      </div>
    </div>
  );
}
