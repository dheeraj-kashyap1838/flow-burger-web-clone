import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'; // Updated to 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white fixed z-10 h-24 bg-black left-0 top-0 w-full">
      <div className="container mx-auto max-w-[1440px]">
        <nav className="flex items-center justify-between px-7 py-4">
          {/* Logo Section */}
          <div className="basis-2/12 flex justify-start">
            <img src={logo} alt="Company Logo" className="h-12" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`basis-7/12 md:block ${
              isMenuOpen ? 'block' : 'hidden'
            } absolute md:static top-24 left-0 w-full md:w-auto bg-black md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row md:flex-nowrap gap-5 md:gap-10 justify-center text-xl px-7 md:px-0 py-4 md:py-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/Gallery">Gallery</Link></li>
              <li><Link to="/Todo">Todo</Link></li>
              <li><Link to="/Contact">Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;