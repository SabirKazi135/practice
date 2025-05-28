import React, { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: false },
    { title: 'Task 3', done: false },
  ]);

  function toggleDone(index) {
    const newList = [...taskList];
    newList[index].done = !newList[index].done;
    setTaskList(newList);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#4A55A2]">
      <div className="h-[90%] w-[448px] space-y-6 rounded-[32px] bg-white px-4 py-8 shadow-2xl">
        <div className="text-[32px] font-bold text-[#212121]">To-Do list</div>
        <form className="w-full">
          <nav className="h- flex h-12 w-full items-center justify-between rounded-[48px] bg-[#eee] pl-4">
            <input
              type="text"
              placeholder="I need to do..."
              className="h-5 bg-transparent px-[2px] py-[1px] text-base text-black outline-none"
            />
            <button className="h-12 rounded-[48px] bg-[#F24C3D] px-8 text-center font-bold text-[#eee]">
              Add
            </button>
          </nav>
        </form>
        <div className="flex flex-col">
          {taskList.map((task, index) => {
            return (
              <div key={index} className="flex">
                <button onClick={() => toggleDone(index)}>
                  {task.done ? (
                    <i className="fa-solid fa-circle-check text-[#F24C3D]"></i>
                  ) : (
                    <i className="fa-regular fa-circle text-gray-400"></i>
                  )}
                </button>
                <p>{task.title}</p>
                <button>*</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
