import { FaPython, FaFlask, FaDatabase, FaJs, FaHtml5, FaCss3, FaReact, FaEthereum, FaNode, FaDocker } from 'react-icons/fa';
import { SiMysql, SiJquery, SiNginx, SiTailwindcss, SiTypescript, SiChainlink, SiGooglecloud, SiPostgresql, SiSolidity, SiOpenstreetmap, SiMui } from 'react-icons/si';
import { TbBrandVite, TbApi } from 'react-icons/tb';
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
      githubLink: "https://github.com/neisnei/holbertonschool-AirBnB_clone_v4",
      demoLink: "#"
    },
    {
      title: "Hurricane Insurance DApp (Redfield)",
      description: "A comprehensive decentralized application for Hurricane Insurance using blockchain technology. It features automatic payouts based on real-time weather data, smart contract integration, and a full-stack architecture. The system includes a React frontend, Node.js backend with PostgreSQL, Solidity smart contracts, and leverages various APIs and data services for accurate hurricane tracking and risk assessment.",
      techStack: [
        { Icon: FaReact, name: 'React' },
        { Icon: SiTypescript, name: 'TypeScript' },
        { Icon: TbBrandVite, name: 'Vite' },
        { Icon: SiMui, name: 'Material UI' },
        { Icon: FaNode, name: 'Node.js' },
        { Icon: SiPostgresql, name: 'PostgreSQL' },
        { Icon: FaEthereum, name: 'Ethereum' },
        { Icon: SiSolidity, name: 'Solidity' },
        { Icon: SiChainlink, name: 'Chainlink' },
        { Icon: FaDocker, name: 'Docker' },
        { Icon: TbApi, name: 'OpenWeather API' },
        { Icon: SiOpenstreetmap, name: 'Leaflet' },
        { Icon: SiGooglecloud, name: 'Google Cloud' },
      ],
      githubLink: "https://github.com/ControlYourPotatoes/redfield-react/", // Replace with actual GitHub link
      demoLink: "" // Replace with actual demo link
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
    <section id="projects" className="py-5 bg-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-orange text-center">Projects</h2>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;