import ProjectCard from "../subcomponents/ProjectCard";

const LeftSection = ({ posts, currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="w-full lg:w-2/3">
            <div className="relative mb-6">
                <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                    Recent Posts
                </div>
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black" />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
                {posts.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-start justify-start mt-8 space-x-2 flex-wrap">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded hover:bg-[#4553e7] disabled:opacity-50"
                >
                    <i className='bx bx-chevron-left'></i>
                </button>

                {(() => {
                    const maxButtons = 4;
                    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
                    let end = start + maxButtons - 1;

                    if (end > totalPages) {
                        end = totalPages;
                        start = Math.max(1, end - maxButtons + 1);
                    }

                    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`px-3 py-1 border rounded ${currentPage === pageNum ? "bg-[#4553e7] text-white" : "hover:bg-gray-200"}`}
                        >
                            {pageNum}
                        </button>
                    ));
                })()}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
                >
                    <i className='bx bx-chevron-right'></i>
                </button>
            </div>
        </div>
    );
};

export default LeftSection;
