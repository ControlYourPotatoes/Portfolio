import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { IconType } from 'react-icons';
import { ProjectCardProps } from '../types';


const TechIcon: React.FC<{ Icon: IconType; name: string }> = ({ Icon, name }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-dark text-white py-1 rounded text-xs whitespace-nowrap"
          >
            {name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, githubLink, demoLink }) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue<number>(0);
  const [mustFinish, setMustFinish] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const gap = 4;
  const baseVelocity = 30; // pixels per second
  const hoverVelocity = 10; // slower speed when hovering

  useEffect(() => {
    if (width === 0) return; // Don't animate if width is not yet measured
  
    let controls: { stop: () => void };
    const distance = width / 2 + gap;
    const currentVelocity = isHovered ? hoverVelocity : baseVelocity;
  
    const animateLoop = () => {
      const currentPosition = xTranslation.get();
      const remainingDistance = distance + currentPosition;
      const remainingDuration = remainingDistance / currentVelocity;
  
      controls = animate(xTranslation, -distance, {
        ease: "linear",
        duration: remainingDuration,
        onComplete: () => {
          xTranslation.set(0);
          animateLoop();
        },
      });
    };
  
    if (mustFinish) {
      const currentPosition = xTranslation.get();
      const remainingDistance = distance + currentPosition;
      const remainingDuration = remainingDistance / currentVelocity;
  
      controls = animate(xTranslation, -distance, {
        ease: "linear",
        duration: remainingDuration,
        onComplete: () => {
          setMustFinish(false);
          xTranslation.set(0);
          animateLoop();
        },
      });
    } else {
      animateLoop();
    }
  
    return () => controls?.stop();
  }, [width, mustFinish, isHovered, xTranslation]);

  const handleHoverStart = () => {
    setIsHovered(true);
    setMustFinish(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    setMustFinish(true);
  };

  const highlightTech = (text: string) => {
    const techNames = techStack.map(tech => tech.name.toLowerCase());
    return text.split(/\b/).map((word, index) => {
      const lowercaseWord = word.toLowerCase();
      if (techNames.includes(lowercaseWord)) {
        return <span key={index} className="text-orange font-semibold">{word}</span>;
      }
      return word;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-dark text-white p-4  md:p-6 rounded-lg shadow-xl max-w-md flex flex-col h-fit "
    >
      <h2 className="text-2xl font-bold mb-1 text-center text-orange-light">{title}</h2>
      <motion.div 
        className="mb-6 overflow-hidden"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <motion.div 
          ref={ref}
          style={{ x: xTranslation }}
          className="flex gap-1 mt-4 mb-1"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
          ))}
        </motion.div>
      </motion.div>
      <p className="text-sm mb-6 flex-grow">
        {highlightTech(description)}
      </p>
      <div className="flex justify-between items-center px-2 mt-auto">
        <motion.a 
          href={demoLink} 
          className="text-orange hover:text-orange-light transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Architecture &rarr;
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