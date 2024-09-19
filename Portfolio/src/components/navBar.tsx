import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray p-4 border-b border-orange">
      <div className="container mx-auto flex justify-end items-center">
        <div className="w-16 h-16 self-center">
          <img src={Logo} alt="Logo" className="w-16 h-16 mb-[-2rem]" />
        </div>
        <ul className="flex space-x-6">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link to={item.toLowerCase()} smooth={true} duration={500} className="nav-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;