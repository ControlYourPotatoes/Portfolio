import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Socials from '../components/socials';
import { useScrollAnimation } from '../hooks/useScollAnimation';

const ContactSection: React.FC = () => {
  const { ref, controls } = useScrollAnimation({
    threshold: 0.2,
    initialStates: { opacity: 0, y: 50 }
  });

  return (
    <section id="contact" className="py-20 bg-gray" ref={ref}>
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-orange text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-center mb-6 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex flex-col items-center space-y-4 mb-8">
            <motion.a 
              href="mailto:pugadevmail@gmail.com"
              className="flex items-center space-x-2 text-white hover:text-orange transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-2xl" />
              <span>pugadevmail@gmail.com</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/pugadev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-orange transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn PugaDev</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/ControlYourPotatoes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-orange transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-2xl" />
              <span>GitHub ControlYourPotatoes</span>
            </motion.a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Open to remote opportunities | Based in Puerto Rico
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg mb-4">
            Let's build something amazing together!
          </p>
          <Socials layout="horizontal" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;