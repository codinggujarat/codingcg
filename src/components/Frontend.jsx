import React from 'react';
import MainSection from '../components/MainSection';
import { projects } from '../data/projectData';

const Frontend = () => {
    const frontendProjects = projects.filter(proj => proj.category === 'frontend');

    return (
        <>
            <MainSection projects={frontendProjects} />
        </>
    );
};

export default Frontend;
