import React, { useState, useEffect } from 'react';
import Card from '../subcomponents/ProjectCard';
import { projects } from '../data/projectData';

const CardList = () => {
    const reversedProjects = [...projects].reverse();
    const [visibleCount, setVisibleCount] = useState(10);

    // Load more cards when user reaches bottom
    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

            if (isBottom) {
                setVisibleCount(prev => Math.min(prev + 10, reversedProjects.length));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [reversedProjects.length]);

    return (
        <div className="min-h-screen p-6 flex mt-0 justify-center">
            <div className="w-auto max-w-7xl">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {reversedProjects.slice(0, visibleCount).map((proj, index) => (
                        <Card key={index} {...proj} />
                    ))}
                </div>

                {/* Optional: Show message when all items are loaded */}
                {visibleCount >= reversedProjects.length && (
                    <p className="text-center text-gray-500 mt-6">✅ All projects loaded.</p>
                )}
            </div>
        </div>
    );
};

export default CardList;
