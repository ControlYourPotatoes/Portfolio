import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/croppedLogo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray p-1 border-b border-orange w-[100%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mr-80">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
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