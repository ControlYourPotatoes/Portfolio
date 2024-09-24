import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navBar';
import Socials from '../components/socials';
import faceImage from '../assets/gray.webp';
import { Link } from 'react-scroll';

const TopSection: React.FC = () => {
  const imageOpacity = 0.5;

  return (
    <section className="bg-gray flex flex-col w-full md:min-h-lvh ">

      <Navbar />
      <div className="container mx-auto grid grid-cols-5 md:grid-cols-10 items-center px-5 mt-14 md:px-1">
        {/* Content */}
        <motion.div 
          className="row-span-full col-start-1 col-end-4 md:col-end-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xl md:text-5xl font-bold mb-2 text-orange">Alexander Puga</h1>
          <p className="text-xs md:text-xl mb-1 text-white">Full Stack Web3 Developer</p>
          <p className="text-xs md:text-lg mb-4 text-white">Puerto Rico</p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
            <motion.button 
              className="bg-orange text-white text-xs md:text-xl px-6 py-1 md:py-2 rounded-full hover:bg-orange-light transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
        
        {/* Image */}
        <div className="row-span-full col-start-2 col-end-11 md:col-start-5">
          <motion.div 
            className="max-w-sm mx-auto md:max-w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={faceImage} 
              alt="Alexander Puga" 
              className="w-full object-contain"
              style={{ filter: `opacity(${imageOpacity})` }}
            />
          </motion.div>
        </div>

        {/* Socials */}
        <div className='row-span-full col-start-5 col-end-11 md:col-start-9 md:col-end-10 self-end pb-10 md:pb-20 justify-self-center md:justify-self-end z-10'>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:block h-24 w-0.5 bg-orange mr-4"></div>
            <Socials layout="vertical" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;