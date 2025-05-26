import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [age, setAge] = useState('');

  function changeInput(e) {
    setInput(e.target.value);
    setAge(''); // clear age when input changes
  }

  function calculateAge() {
    if (!input) return;

    const dateObj = new Date(input);
    const birthYear = dateObj.getFullYear();
    const birthMonth = dateObj.getMonth() + 1; // JS months: 0-11, so +1
    const birthDate = dateObj.getDate();

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Adjust for leap year if current year is leap year and month > Feb
    if (
      (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
      currentYear % 400 === 0
    ) {
      daysInMonth[1] = 29;
    }

    let year = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDate - birthDate;

    if (days < 0) {
      months -= 1;
      let prevMonthIndex = currentMonth - 2;
      if (prevMonthIndex < 0) prevMonthIndex = 11;
      days += daysInMonth[prevMonthIndex];
    }

    if (months < 0) {
      year -= 1;
      months += 12;
    }

    // Singular/plural helpers
    const yearStr = year === 1 ? 'year' : 'years';
    const monthStr = months === 1 ? 'month' : 'months';
    const dayStr = days === 1 ? 'day' : 'days';

    let ageString = '';

    // Build string with conditions like your original JS logic
    if (year > 0 && months > 0 && days > 0) {
      ageString = `${year} ${yearStr}, ${months} ${monthStr}, and ${days} ${dayStr} old.`;
    } else if (year === 0 && months === 0 && days > 0) {
      ageString = `Only ${days} ${dayStr} old!`;
    } else if (year > 0 && months === 0 && days === 0) {
      ageString = `${year} ${yearStr} old. Happy Birthday!!`;
    } else if (year > 0 && months > 0 && days === 0) {
      ageString = `${year} ${yearStr} and ${months} ${monthStr} old.`;
    } else if (year === 0 && months > 0 && days > 0) {
      ageString = `${months} ${monthStr} and ${days} ${dayStr} old.`;
    } else if (year > 0 && months === 0 && days > 0) {
      ageString = `${year} ${yearStr} and ${days} ${dayStr} old.`;
    } else if (year === 0 && months > 0 && days === 0) {
      ageString = `${months} ${monthStr} old.`;
    } else {
      ageString = 'Oops! Could not calculate age!';
    }

    setAge(ageString);
  }

  return (
    <div className="flex h-screen items-center bg-[linear-gradient(-200deg,_#1212b7_0,_#accbe5_100%)]">
      <div className="space-y-8 pl-36 pr-8">
        <header className="">
          <h1 className="font-unbounded text-[40px] font-bold text-white">
            JavaScript
          </h1>
          <h1 className="font-unbounded text-[40px] font-bold text-[#a2ff86]">
            Age Calculator
          </h1>
        </header>
        <section className="flex gap-4 rounded-lg bg-white/30 p-8">
          <input
            type="date"
            className="rounded-md border-none px-3 py-2 font-mono text-base text-black outline-none"
            value={input}
            onChange={changeInput}
          />
          <button
            onClick={calculateAge}
            className="rounded-md border-none bg-[#A2FF86] px-3 py-2 font-sans text-base text-black outline-none"
          >
            Calculate
          </button>
        </section>
        <p>{age}</p>
      </div>
    </div>
  );
}
