import React from "react";
import { Routes, Route } from "react-router-dom"; // step 3

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <h1>My React App</h1>

      <Routes>
        {" "}
        {/* Step 4: Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
