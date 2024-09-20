import React from 'react';
import Navbar from '../components/navBar';
import Socials from '../components/socials';

//Attempt to import image
import faceImage from '../assets/gray.webp';

const TopSection: React.FC = () => {

  //Image opacity
  const imageOpacity = 0.5;
  return (
    <section className="bg-gray-dark min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto flex-grow flex items-center h-10">
        <div className="flex w-full items-center">
          {/* Left side: Content */}
          <div className="w-1/3 pr-3">
            <h1 className="text-5xl font-bold mb-2 text-orange"> Alexander Puga</h1>
            <p className="text-xl mb-1 text-white">Full Stack Web3 Developer</p>
            <p className="text-md mb-4 text-white"> Puerto Rico </p>
            <button className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-light transition duration-300">Contact Me</button>
          </div>
          
          {/* Right side: Image and Socials */}
          <div className="w-2/3 relative">
            {/* Image container */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-11/12 aspect-square overflow-visible">
            <img 
                src={faceImage} 
                alt="Alexander Puga" 
                className="w-full h-full object-contain"
                style={{ filter: `opacity(${imageOpacity})` }}
              />
            </div>
            
            {/* Socials overlay */}
            <div className="absolute top-20 right-[6rem] z-10 flex items-center">
              <div className="h-24 w-0.5 bg-orange mr-4"></div>
              <Socials layout="vertical" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;