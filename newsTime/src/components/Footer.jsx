import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="flex flex-col items-center">
        <p className="text-center text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by GORILLA TIMES
        </p>
        <div className="mt-2">
          <a href="#" className="text-white hover:text-gray-400 mx-2">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">Terms of Service</a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
