import React, { useState } from 'react';

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#4A55A2]">
      <div className="h-[90%] rounded-[32px] bg-white px-4 py-8 shadow-2xl">
        <div className="text-[32px] font-bold text-[#212121]">To-Do list</div>
        <form className="w-full">
          <nav className="w-full rounded-[48px] bg-[#eee] pl-4">
            <input
              type="text"
              className="h-5 bg-transparent px-[2px] py-[1px] outline-none"
            />
            <button>Add</button>
          </nav>
        </form>
        <div className=""></div>
      </div>
    </div>
  );
}
