import { useState, useEffect } from 'react';
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

  // useEffect(() => {

  // }, [dir])
  function changeValue(choice) {
    setChoice(choice);
  }

  function changeDir() {
    if (dir === 'up') {
      setDir('down');
      return;
    }
    setDir('up');
  }
  return (
    <div className="flex h-screen items-center justify-center bg-[#BF4B37]">
      <div className="space-y-7">
        <button
          onClick={changeDir}
          className="flex h-[50px] w-80 items-center justify-between bg-[#DADADA] px-4"
        >
          <span>{choice}</span>
          <img
            src="./up.png"
            alt=""
            className={`h-6 w-6 transform transition-transform duration-200 ${dir === 'down' ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
        <div
          className={`bg-g transition-max-height flex w-80 origin-top flex-col ${
            dir === 'up' ? 'max-h-0' : 'max-h-[300px]'
          }`}
        >
          {options.map((option) => {
            return (
              <button
                onClick={() => changeValue(option.name)}
                className="flex h-[50px] w-full items-center border-0 bg-[#DADADA] px-4 outline-none hover:bg-[#fafafa] focus:outline-none focus:ring-0"
              >
                <img className="h-8 w-8" src={option.src} alt="" />{' '}
                <span className="mx-4">{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
