import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/croppedLogo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ['About', 'Projects', 'Contact'];

  const menuVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <nav className="bg-gray p-4 border-b border-orange w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-white text-lg font-semibold">Puga</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 pr-6">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-white hover:text-orange transition-colors duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none pr-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden bg-gray-dark absolute left-0 right-0 px-4 py-2 mt-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {menuItems.map((item) => (
              <motion.li
                key={item}
                className="py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-orange transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;