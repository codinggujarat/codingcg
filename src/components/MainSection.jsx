import { useState } from "react";
import LeftSection from "../subcomponents/LeftSection";
import RightSection from "../subcomponents/RightSection";
import { projects as allProjects } from "../data/projectData";

const POSTS_PER_PAGE = 6;

const MainSection = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Use passed projects or fallback to all
    const sourceProjects = projects || allProjects;

    // Show newest posts first
    const reversedProjects = [...sourceProjects].reverse();

    const totalPages = Math.ceil(reversedProjects.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = reversedProjects.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <div className="container mx-auto max-w-7xl px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <LeftSection
                    posts={currentPosts}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
                {/* Optional: only show RightSection if there's a featured post */}
                {reversedProjects.length > 0 && (
                    <RightSection featured={reversedProjects[0]} />
                )}
            </div>
        </div>
    );
};

export default MainSection;
