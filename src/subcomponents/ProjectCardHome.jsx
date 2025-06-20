import React from 'react';

const ProjectCard = ({ title, image, date, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="text-sm font-medium mb-1">{date}</p>
                <h3 className="text-lg font-bold leading-tight">{title}</h3>
            </div>
        </a>
    );
};

export default ProjectCard;
