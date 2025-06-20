import React from 'react';
import MainSection from '../components/MainSection';
import { projects } from '../data/projectData';

const Php = () => {
    const frontendProjects = projects.filter(proj => proj.category === 'php');

    return (
        <>
            <MainSection projects={frontendProjects} />
        </>
    );
};

export default Php;
