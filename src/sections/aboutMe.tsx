import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaApple } from 'react-icons/fa';
import { SiGooglecloud, SiPostgresql, SiTailwindcss, SiUbuntu, SiWindows } from 'react-icons/si';
import { IoLanguage } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { useScrollAnimation } from '../hooks/useScollAnimation';

interface SkillCardProps {
  skill: string;
  Icon: IconType;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, Icon, index }) => {
  const { ref, controls } = useScrollAnimation({
    threshold: 0.1,
    initialStates: { opacity: 0, y: 50 }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-light rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center hover:bg-gray-dark hover:drop-shadow-xl transition-all duration-300 group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="text-orange-light"
      >
        <Icon className="w-10 h-12 mb-2 group-hover:text-orange-light transition-colors duration-300" />
      </motion.div>
      <span className="text-sm font-bold text-center group-hover:text-orange transition-colors duration-300">{skill}</span>
    </motion.div>
  );
};

interface SkillItem {
  name: string;
  Icon: IconType;
}

interface SkillSectionProps {
  title: string;
  items: SkillItem[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  const { ref, controls } = useScrollAnimation({
    threshold: 0.1,
    initialStates: { opacity: 0, x: -50 }
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold mb-6 text-orange-light text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <SkillCard key={item.name} skill={item.name} Icon={item.Icon} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const AboutMe = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation({
    threshold: 0.1,
    initialStates: { opacity: 0, x: -50 }
  });

  const { ref: descriptionRef, controls: descriptionControls } = useScrollAnimation({
    threshold: 0.1,
    initialStates: { opacity: 0, y: 20 }
  });

  const skills = [
    { name: 'Python', Icon: FaPython },
    { name: 'JavaScript', Icon: FaJs },
    { name: 'React', Icon: FaReact },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Git', Icon: FaGitAlt },
    { name: 'HTML', Icon: FaHtml5 },
    { name: 'CSS', Icon: FaCss3Alt },
    { name: 'Google Cloud', Icon: SiGooglecloud },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'Tailwind', Icon: SiTailwindcss },
  ];

  const operatingSystems = [
    { name: 'Ubuntu/Linux', Icon: SiUbuntu },
    { name: 'Windows', Icon: SiWindows },
    { name: 'macOS', Icon: FaApple },
  ];

  const languages = [
    { name: 'English', Icon: IoLanguage },
    { name: 'Spanish', Icon: IoLanguage },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-gray">
      <div className="container mx-auto px-4 md:px-36">
        <motion.h2
          ref={headerRef}
          initial={{ opacity: 0, x: -50 }}
          animate={headerControls}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-5 text-orange"
        >
          About Me
        </motion.h2>
        <div className="flex justify-start mb-8 md:mb-12">
          <motion.div
            initial={{ height: 0 }}
            animate={descriptionControls}
            transition={{ duration: 0.5 }}
            className="w-0.5 bg-orange mr-4 hidden md:block"
          ></motion.div>
          <motion.p
            ref={descriptionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={descriptionControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg max-w-3xl"
          >
            Full-Stack developer with practical experience in building web applications using modern technologies. Focused on Web3 development and blockchain technologies.
          </motion.p>
        </div>

        <SkillSection title="My Skills" items={skills} />
        <SkillSection title="Operating Systems" items={operatingSystems} />
        <SkillSection title="Languages" items={languages} />
      </div>
    </section>
  );
};

export default AboutMe;