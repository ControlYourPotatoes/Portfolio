import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

const TechIcon = ({ Icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`text-4xl ${isHovered ? 'text-orange' : 'text-gray-light'} transition-colors duration-300`}
      >
        <Icon />
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-dark text-white px-2 py-1 rounded text-xs whitespace-nowrap"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, techStack, githubLink, demoLink }) => {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: -width,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-dark text-white p-6 rounded-lg shadow-xl max-w-md m-2"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-light">{title}</h2>
      <motion.div 
        className="mb-6 overflow-hidden"
        onHoverStart={stopAnimation}
        onHoverEnd={startAnimation}
        onViewportEnter={startAnimation}
      >
        <motion.div 
          ref={ref}
          style={{ x }}
          animate={controls}
          className="flex space-x-4 mt-4 mb-2"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
          ))}
        </motion.div>
      </motion.div>
      <p className="text-sm mb-6">
        {description.split(' ').map((word, index) => (
          techStack.some(tech => tech.name.toLowerCase() === word.toLowerCase()) 
            ? <span key={index} className="text-orange font-semibold">{word} </span>
            : word + ' '
        ))}
      </p>
      <div className="flex justify-between items-center px-2">
        <motion.a 
          href={demoLink} 
          className="text-orange hover:text-orange-light transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project &rarr;
        </motion.a>
        <motion.a 
          href={githubLink} 
          className="text-gray-400 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub Repository
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;