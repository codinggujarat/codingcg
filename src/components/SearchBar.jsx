import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { projects } from '../data/projectData';

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (value) => {
        setQuery(value);
        if (value.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = projects.filter((project) =>
            project.title.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    };

    const handleToggle = () => {
        if (showSearch) {
            // closing the search box
            setShowSearch(false);
            setQuery('');
            setResults([]);
        } else {
            setShowSearch(true);
        }
    };

    return (
        <div className="relative flex justify-center items-center w-20">
            {/* Toggle Search/Close Icon */}
            <button
                onClick={handleToggle}
                className="text-2xl text-black z-50"
            >
                {showSearch ? <FiX /> : <FiSearch />}
            </button>

            {/* Search Box */}
            {showSearch && (
                <div className="absolute top-3 right-0 w-[350px] sm:w-[450px] bg-white p-4 shadow-xl z-40 border-b border-l border-r 
                  transform transition-all duration-300 ease-out translate-y-8 opacity-0
                  animate-[fadeInUp_0.3s_ease-out_forwards]">
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="flex-grow border px-4 py-2 outline-none text-sm"
                            autoFocus
                        />
                        <button
                            onClick={() => handleSearch(query)}
                            className="bg-black text-white px-4 py-2 text-sm font-semibold"
                        >
                            Search
                        </button>
                    </div>

                    {results.length > 0 ? (
                        <>
                            <p className="text-sm font-semibold mb-4">
                                If You're Not Happy With The Results, Please Do Another Search.
                            </p>
                            <div className="space-y-4 max-h-[300px] overflow-y-auto">
                                {results.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-3 items-start border-b pb-2 hover:bg-gray-50 transition rounded p-1"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="text-sm font-semibold leading-snug">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 mt-1">
                                                <strong>{item.author}</strong> - {item.date}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </>
                    ) : (
                        query && (
                            <p className="text-sm text-red-500 font-medium">No results found.</p>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
