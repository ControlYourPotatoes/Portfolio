import React from 'react';
import Navbar from '../components/navBar';
import Socials from '../components/socials';

const TopSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow flex items-center">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-4xl font-bold mb-2">I'M <span className="text-orange">Alexander Puga</span></h1>
            <p className="text-xl mb-4">Full Stack Web3 Developer</p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">Contact Me</button>
          </div>
          <div className="relative">
            <img src="/path-to-your-image.jpg" alt="foto" className="w-64 h-64 object-cover rounded-full" />
            <div className="absolute top-0 right-0 bottom-0 left-0 border-2 border-orange rounded-full transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default TopSection;