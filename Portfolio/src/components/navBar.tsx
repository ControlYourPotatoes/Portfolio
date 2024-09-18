import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray p-4 border-b border-orange">
      <div className="container mx-auto flex justify-end items-center">
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