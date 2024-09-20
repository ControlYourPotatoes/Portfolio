import React from 'react';

const SkillCard = ({ skill, icon }) => (
  <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
    <img src={icon} alt={skill} className="w-12 h-12 mb-2" />
    <span className="text-sm font-medium">{skill}</span>
  </div>
);

const AboutMe = () => {
  const skills = [
    { name: 'Python', icon: '/path/to/python-icon.png' },
    { name: 'JavaScript', icon: '/path/to/javascript-icon.png' },
    { name: 'React', icon: '/path/to/react-icon.png' },
    { name: 'Docker', icon: '/path/to/docker-icon.png' },
    { name: 'Git', icon: '/path/to/git-icon.png' },
    { name: 'HTML & CSS', icon: '/path/to/html-css-icon.png' },
    { name: 'Google Cloud', icon: '/path/to/google-cloud-icon.png' },
    { name: 'PostgreSQL', icon: '/path/to/postgresql-icon.png' },
    { name: 'Tailwind', icon: '/path/to/tailwind-icon.png' },
  ];

  const operatingSystems = [
    { name: 'Ubuntu/Linux', icon: '/path/to/linux-icon.png' },
    { name: 'Windows', icon: '/path/to/windows-icon.png' },
    { name: 'macOS', icon: '/path/to/macos-icon.png' },
  ];

  const languages = [
    { name: 'English', icon: '/path/to/english-icon.png' },
    { name: 'Spanish', icon: '/path/to/spanish-icon.png' },
  ];

  return (
    <section id="about" className="py-20 bg-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-orange">About Me</h2>
        <p className="text-lg mb-12 max-w-3xl">
          I have acquired and sharpened in ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
          molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
          sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. I am trustworthy, creative, and an effective communicator. I fondly anticipate working in a
          challenging yet rewarding organization to attain its visions for personal growth.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-orange">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill.name} icon={skill.icon} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-orange">Operating Systems</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {operatingSystems.map((os) => (
            <SkillCard key={os.name} skill={os.name} icon={os.icon} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-orange">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <SkillCard key={lang.name} skill={lang.name} icon={lang.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;