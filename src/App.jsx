import React, { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
  return (
    <div className="mt-32 flex justify-center">
      <section
        className="h-[50px] w-[416px] rounded-[20px] p-8"
        style={{
          backgroundImage: 'linear-gradient(-45deg, #46C2CB 20%, #E5E5CB 100%)',
        }}
      >
        <input type="text" />
        <button></button>
        <section>
          <header>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div style={{ backgroundImage: { image } }}></div>
          </header>
          <section>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <p></p>
        </section>
      </section>
    </div>
  );
}
