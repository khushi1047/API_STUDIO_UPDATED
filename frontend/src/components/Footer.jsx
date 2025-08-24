import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Unified Platform. All rights reserved.
        </p>

        <div className="flex space-x-6 text-sm">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms & Conditions</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
