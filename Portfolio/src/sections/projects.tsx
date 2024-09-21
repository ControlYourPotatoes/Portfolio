import React from 'react';
import { FaPython, FaFlask, FaDatabase, FaJs, FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiMysql, SiJquery, SiNginx, SiTailwindcss, SiTypescript } from 'react-icons/si';
import ProjectCard from '../components/projectCards';

const Projects = () => {
  const projects = [
    {
      title: "AirBnB Clone",
      description: "This full-stack AirBnB clone is built using Python, Flask, and SQLAlchemy for the backend, with MySQL as the database. The frontend utilizes JavaScript, jQuery, HTML5, and CSS3 to create a dynamic and responsive user interface.",
      techStack: [
        { Icon: FaPython, name: 'Python' },
        { Icon: FaFlask, name: 'Flask' },
        { Icon: FaDatabase, name: 'SQLAlchemy' },
        { Icon: SiMysql, name: 'MySQL' },
        { Icon: FaJs, name: 'JavaScript' },
        { Icon: SiJquery, name: 'jQuery' },
        { Icon: FaHtml5, name: 'HTML5' },
        { Icon: FaCss3, name: 'CSS3' },
        { Icon: SiNginx, name: 'Nginx' },
      ],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include smooth animations, dynamic content loading, and a clean, professional design.",
      techStack: [
        { Icon: FaReact, name: 'React' },
        { Icon: SiTypescript, name: 'TypeScript' },
        { Icon: SiTailwindcss, name: 'Tailwind CSS' },
        { Icon: FaJs, name: 'JavaScript' },
        { Icon: FaHtml5, name: 'HTML5' },
        { Icon: FaCss3, name: 'CSS3' },
      ],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-orange">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;