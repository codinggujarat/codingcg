import React from 'react';
import MainSection from '../components/MainSection';
import { projects } from '../data/projectData';

const Reactjs = () => {
  const frontendProjects = projects.filter(proj => proj.category === 'reactjs');

  return (
    <>
      {/* Section Title */}
      <div
        className="text-center my-10 group"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className="text-3xl md:text-4xl font-medium text-[#4553e7] capitalize tracking-wide cursor-pointer">
          ReactJs Projects
        </h1>
        <div className="mt-2 mx-auto border-b-4 border-[#4553e7] w-24 transition-all duration-300 group-hover:w-40" />
      </div>

      {/* Projects Section */}
      <MainSection projects={frontendProjects} />
    </>
  );
};

export default Reactjs;
