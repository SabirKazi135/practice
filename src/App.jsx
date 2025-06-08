import { useState } from 'react';

export default function App() {
  const [choice, setChoice] = useState('Select Social Media');
  const [dir, setDir] = useState('up');
  const options = [
    { name: 'Facebook', src: '/facebook.png' },
    { name: 'Instagram', src: '/instagram.png' },
    { name: 'Twitter', src: '/twitter.png' },
    { name: 'Pinterest', src: '/pinterest.png' },
    { name: 'WhatsApp', src: '/whatsapp.png' },
    { name: 'YouTube', src: '/youtube.png' },
  ];

  function changeValue(choice) {
    setChoice(choice);
    setDir('up'); // close dropdown on select (optional)
  }

  function changeDir() {
    setDir((prev) => (prev === 'up' ? 'down' : 'up'));
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#BF4B37]">
      <div className="relative w-80 space-y-7">
        <button
          onClick={changeDir}
          className="flex h-[50px] w-full items-center justify-between bg-[#DADADA] px-4"
        >
          <span>{choice}</span>
          <img
            src="./up.png"
            alt=""
            className={`h-6 w-6 transform transition-transform duration-200 ${
              dir === 'down' ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        <div
          className={`transition-max-height absolute left-0 top-full z-10 flex w-full origin-top flex-col overflow-hidden bg-[#DADADA] duration-500 ease-in-out ${
            dir === 'up' ? 'max-h-0' : 'max-h-[300px]'
          }`}
        >
          {options.map((option) => (
            <button
              key={option.name}
              onClick={() => changeValue(option.name)}
              className="flex h-[50px] w-full items-center border-0 px-4 outline-none hover:bg-[#fafafa] focus:outline-none focus:ring-0"
            >
              <img className="h-8 w-8" src={option.src} alt={option.name} />
              <span className="mx-4">{option.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
