import React from 'react';
import MainSection from '../components/MainSection';
import { projects } from '../data/projectData';

const Python = () => {
    const frontendProjects = projects.filter(proj => proj.category === 'python');

    return (
        <>
            <MainSection projects={frontendProjects} />
        </>
    );
};

export default Python;
