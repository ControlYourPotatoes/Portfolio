import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 border-b border-orange-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-orange-500 text-2xl font-bold">D</div>
        <ul className="flex space-x-6">
          <li><Link to="about" smooth={true} duration={500} className="hover:text-orange-500 cursor-pointer">About</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} className="hover:text-orange-500 cursor-pointer">Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="hover:text-orange-500 cursor-pointer">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;