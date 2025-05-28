import React, { useState } from 'react';

export default function App() {
  return (
    <div className="flex h-screen justify-center bg-[#2D4356] pt-10">
      <div className="bg-white text-black">
        <h1>Simple Quiz App</h1>
        <hr />
        <div>
          <div>
            <label className="" htmlFor="">
              Questin Count
            </label>
            <br />
            <input type="number" />
          </div>
          <div>
            <label className="" htmlFor=""></label>
            <br />
            <select name="" id="">
              <option value="any">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Books</option>
              <option value="11">Film</option>
              <option value="12">Music</option>
              <option value="13">Musicals &amp; Theatres</option>
              <option value="14">Television</option>
              <option value="15">Video Games</option>
              <option value="16">Board Games</option>
              <option value="17">Nature</option>
              <option value="18">sinceComputers</option>
              <option value="19">sinceMathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Comics</option>
              <option value="30">Gadgets</option>
              <option value="31">Japanese Anime & Manga</option>
              <option value="32">Cartoon & Animations</option>
            </select>
          </div>
          <div>
            <label className="" htmlFor="">
              Select Category
            </label>
          </div>
          <div>
            <label className="" htmlFor=""></label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
