import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='text-white fixed z-10 h-24 bg-black left-0 top-0 w-full'>
      <div className="container mx-auto max-w-[1440px]">
        <nav className="flex md:flex-row flex-col items-center md:justify-between px-7 py-4">
          <div className="basis-2/12 flex md:justify-start justify-center">
            <img src="logo.png" alt="Company Logo" />
          </div>
          <div className="basis-7/12 md:block hidden">
            <ul className='flex flex-row md:flex-nowrap flex-wrap gap-10 justify-center text-xl'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/Gallery">Gallery</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header