import React from 'react';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between w-full px-6 py-4 gap-4 sm:gap-0">
      <div className="flex flex-row items-center gap-3">
        <img src={logo} alt="Logo" className="w-9 h-9" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          API-Studio
        </h1>
      </div>

      <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-9 text-center">
        <li className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-cyan-400 cursor-pointer">
          Overview
        </li>
        <li className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-cyan-400 cursor-pointer">
          API-Tester | Code Editor
        </li>
        <li className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-cyan-400 hover:underline cursor-pointer">
          Dashboard
        </li>
      </ul>

      <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-black rounded px-6 py-2 hover:scale-105 transition-transform">
        Get Started Free
      </button>
      
    </nav>
  );
};

export default Nav;
