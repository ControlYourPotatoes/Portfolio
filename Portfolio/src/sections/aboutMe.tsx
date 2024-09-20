import React from 'react';
import { FaPython, FaJs, FaReact, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaApple } from 'react-icons/fa';
import { SiGooglecloud, SiPostgresql, SiTailwindcss, SiUbuntu, SiWindows } from 'react-icons/si';
import { IoLanguage } from 'react-icons/io5';

const SkillCard = ({ skill, Icon }) => (
  <div className="bg-gray-light rounded-lg p-4 w-32 h-32 flex flex-col items-center justify-center hover:bg-gray-dark transition-colors duration-300 group">
    <div className="text-orange-light group-hover:text-white transition-colors duration-300">
      <Icon className="w-8 h-8 mb-2" />
    </div>
    <span className="text-xs font-medium text-center group-hover:text-white transition-colors duration-300">{skill}</span>
  </div>
);

const SkillSection = ({ title, items }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-6 text-orange-light text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item) => (
        <SkillCard key={item.name} skill={item.name} Icon={item.Icon} />
      ))}
    </div>
  </div>
);

const AboutMe = () => {
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
    <section id="about" className="py-20 bg-gray">
      <div className="container mx-auto px-24">
        <h2 className="text-3xl font-bold mb-5 text-orange">About Me</h2>
        <div className="flex justify-start mb-12">
          <div className="h-16 w-0.5 bg-orange mr-4"></div>
          <p className="text-lg max-w-3xl">
            Full-Stack developer with practical experience in building web applications using modern technologies. Focused on Web3 development and blockchain technologies.
          </p>
        </div>

        <SkillSection title="My Skills" items={skills} />
        <SkillSection title="Operating Systems" items={operatingSystems} />
        <SkillSection title="Languages" items={languages} />
      </div>
    </section>
  );
};

export default AboutMe;