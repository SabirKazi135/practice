import React, { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
  const [display, setDisplay] = useState(`block`);
  return (
    <div className="mt-32 flex items-center justify-center">
      <section
        className="rounded-[20px] p-8"
        style={{
          backgroundImage: 'linear-gradient(-45deg, #46C2CB 20%, #E5E5CB 100%)',
        }}
      >
        <section className="flex gap-5">
          <input
            placeholder="enter city name"
            type="text"
            className="flex h-[50px] w-[306px] items-center rounded-[50px] px-5 text-[20px] text-black outline-none"
          />
          <button className="h-[50px] w-[50px] rounded-[50%] bg-white px-[6px] py-[1px] text-black">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </section>
        <section className={display}>
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
              <span>hello</span>
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
