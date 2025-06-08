import { useState } from 'react';
export default function App() {
  const [choice, setChoice] = useState('Select Social Media');
  return (
    <div>
      <div className="">
        <button>
          <span>{choice}</span>
        </button>
        <div className="">
          <span><img src="" alt="" /></span>
          <span><img src="" alt="" /></span>
          <span><img src="" alt="" /></span>
          <span><img src="" alt="" /></span>
          <span><img src="" alt="" /></span>
          <span><img src="" alt="" /></span>
        </div>
      </div>
    </div>
  );
}
