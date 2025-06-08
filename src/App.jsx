import { useState } from 'react';
export default function App() {
  const [choice, setChoice] = useState('Select Social Media');
  const options = [
    { name: 'Facebook', src: '/facebook.png' },
    { name: 'Instagram', src: '/instagram.png' },
    { name: 'Twitter', src: '/twitter.png' },
    { name: 'Pinterest', src: '/pinterest.png' },
    { name: 'WhatsApp', src: '/whatsapp.png' },
    { name: 'YouTube', src: '/youtube.png' },
  ];

  function changeValue(e) {
    setChoice(e.target.value);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#BF4B37]">
      <div className="">
        <button>
          <span>{choice}</span>
        </button>
        <div className="bg-g flex w-80 flex-col">
          {options.map((option) => {
            return (
              <button
                onClick={() => changeValue(option.name)}
                className="flex h-[50px] w-full items-center bg-[#DADADA] px-4 hover:bg-[#fafafa]"
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
