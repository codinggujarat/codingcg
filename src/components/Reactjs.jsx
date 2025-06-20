import React from 'react';
import MainSection from '../components/MainSection';
import { projects } from '../data/projectData';

const Reactjs = () => {
  const frontendProjects = projects.filter(proj => proj.category === 'reactjs');

  return (
    <>
      <MainSection projects={frontendProjects} />
    </>
  );
};

export default Reactjs;
