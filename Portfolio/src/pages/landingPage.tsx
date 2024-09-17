import React from 'react';
import TopSection from '../sections/topSection';
import AboutMe from '../sections/aboutMe';
import Projects from '../sections/projects';
import Contact from '../sections/contact';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <TopSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default LandingPage;