import React, { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: false },
    { title: 'Task 3', done: false },
  ]);
  const [task, setTask] = useState('');
  function toggleDone(index) {
    const newList = [...taskList];
    newList[index].done = !newList[index].done;
    setTaskList(newList);
  }

  function removeTask(index) {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  }

  function addTask(e) {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    setTaskList([...taskList], { title: task.trim(), done: false });
  }
  return (
    <div className="flex h-screen items-center justify-center bg-[#4A55A2]">
      <div className="h-[90%] w-[448px] space-y-6 rounded-[32px] bg-white px-4 py-8 shadow-2xl">
        <div className="text-[32px] font-bold text-[#212121]">To-Do list</div>
        <form className="w-full">
          <nav className="h- flex h-12 w-full items-center justify-between rounded-[48px] bg-[#eee] pl-4">
            <input
              value={task}
              maxLength={50}
              type="text"
              placeholder="I need to do..."
              className="h-5 bg-transparent px-[2px] py-[1px] text-base text-black outline-none"
            />
            <button
              type="submit"
              onClick={addTask}
              className="h-12 rounded-[48px] bg-[#F24C3D] px-8 text-center font-bold text-[#eee]"
            >
              Add
            </button>
          </nav>
        </form>
        <div className="flex flex-col space-y-3">
          {taskList.map((task, index) => {
            return (
              <div
                key={index}
                className="flex h-[25px] items-baseline justify-between"
              >
                <div className="flex items-baseline gap-3">
                  <button onClick={() => toggleDone(index)}>
                    {task.done ? (
                      <i className="fa-solid fa-circle-check text-[#F24C3D]"></i>
                    ) : (
                      <i className="fa-regular fa-circle text-gray-400"></i>
                    )}
                  </button>
                  <p
                    className={`text-lg ${task.done ? 'text-gray-400 line-through' : ''}`}
                  >
                    {task.title}
                  </p>
                </div>
                <button
                  onClick={() => removeTask(index)}
                  className="px6 flex h-5 w-6 py-1 text-center text-base font-bold"
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
