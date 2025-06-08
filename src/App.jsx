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

  return (
    <div>
      <div className="">
        <button>
          <span>{choice}</span>
        </button>
        <div className="">
          <span>
            <img src="face" alt="" /> <span></span>
          </span>
          <span>
            <img src="" alt="" /> <span></span>
          </span>
          <span>
            <img src="" alt="" /> <span></span>
          </span>
          <span>
            <img src="" alt="" /> <span></span>
          </span>
          <span>
            <img src="" alt="" /> <span></span>
          </span>
          <span>
            <img src="" alt="" /> <span></span>
          </span>
        </div>
      </div>
    </div>
  );
}
