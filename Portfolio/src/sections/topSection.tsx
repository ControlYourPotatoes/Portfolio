import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navBar';
import Socials from '../components/socials';
import faceImage from '../assets/gray.webp';

const TopSection: React.FC = () => {
  const imageOpacity = 0.5;

  return (
    <section className="bg-gray flex flex-col w-full">
      <Navbar />
      <div className="container mx-auto flex-grow grid grid-cols-10 items-center min-w-full my-10">
        {/* Left side: Content */}
        <motion.div 
          className="row-span-full col-start-1 col-end-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-2 text-orange">Alexander Puga</h1>
          <p className="text-xl mb-1 text-white">Full Stack Web3 Developer</p>
          <p className="text-md mb-4 text-white">Puerto Rico</p>
          <motion.button 
            className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-light transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
        
        {/* Right side: Image and Socials */}
        <div className="row-span-full col-start-5 col-end-11">
          <motion.div 
            className=""
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
          
          {/* Socials overlay */}
          
        </div>

        <div className='row-span-full col-start-9 col-end-10 self-end pb-16 justify-self-end'>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-24 w-0.5 bg-orange mr-4"></div>
            <Socials layout="vertical" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;