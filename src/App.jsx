import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom'; // step 3

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import User from './pages/User';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black',
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black',
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black',
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black',
              })}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/sabir"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black',
              })}
            >
              Sabir's profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/raees"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'red' : 'black',
              })}
            >
              raees's profile
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {' '}
        {/* Step 4: Define routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/product/:productID" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
