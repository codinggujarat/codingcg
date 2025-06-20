import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // ✅ Import Link

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
        <nav className="bg-white shadow-xl fixed w-full z-10 top-0 left-0  z-[99999]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="h-10 flex items-center justify-center ">
                    <img
                        src="https://codinggujarat.vercel.app/assets/images/Logo/Letscodeweb.png"
                        className="w-60"
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
                    className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-0 shadow-sm hover:bg-black/60 transition"
                >
                    <i className="bx bxl-youtube text-xl"></i>
                    <span className="capitalize font-medium hidden sm:inline">YouTube</span>
                </a>




                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl text-gray-700">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <ul className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </nav >
    );
};

export default Navbar;
