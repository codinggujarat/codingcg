import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'home', path: '/' },
        { name: 'frontend', path: '/frontend' },
        { name: 'reactjs', path: '/reactjs' },
        { name: 'php', path: '/php' },
        { name: 'python', path: '/python' },
    ];

    return (
        <nav className="bg-white shadow-xl fixed w-full z-[99999] top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Logo */}
                <div className="h-10 flex items-center justify-center">
                    <img
                        src="/src/assets/icon/codingcg.jpg"
                        className="w-60 mt-3"
                        alt="Logo"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-black font-medium uppercase">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link to={link.path} className="hover:text-black/70">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <a
                    href="https://www.youtube.com/@codinggujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#4553e7]/10 text-[#4553e7] border border-[#4553e7]/40 backdrop-blur-md px-4 py-2 rounded-full shadow-md hover:bg-[#4553e7]/80 hover:text-white hover:scale-105 transition-all duration-300"
                >
                    <i className="bx bxl-youtube text-2xl "></i>
                    <span className="capitalize font-semibold hidden sm:inline">YouTube</span>
                </a>

            </div>

            {/* ✅ Mobile Slide-in Menu (Open/Close from LEFT) */}
            <div
                className={`fixed top-[64px] left-0 w-full h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden z-[9999]`}
            >
                <ul className="p-4 space-y-6 text-gray-800 font-medium text-xl uppercase">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block hover:text-blue-500 text-2xl uppercase"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
