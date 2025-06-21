import React from 'react';
import { projects } from '../data/projectData';

const AllProjects = () => {
    const limitedProjects = [...projects].reverse().slice(0, 3); // ✅ Limit to 5 latest projects

    return (
        <div className="min-h-autp  px-6 py-12">
            <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitedProjects.map((proj, index) => (
                    <ProjectCard
                        key={index}
                        title={proj.title}
                        image={proj.image}
                        date={proj.date}
                        link={proj.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
