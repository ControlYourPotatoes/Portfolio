import React from 'react';
import TopSection from '../sections/topSection';
import AboutMe from '../sections/aboutMe';
import Projects from '../sections/projects';
import ContactSection from '../sections/contactSection';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white">
      <TopSection />
      <AboutMe />
      <Projects />
      <ContactSection />
    </div>
  );
};

export default LandingPage;