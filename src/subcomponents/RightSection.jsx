import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectData";
import { socialStats } from "../data/socialStats";

const RightSection = ({ featured }) => {
    const navigate = useNavigate();

    // Get latest 4 posts
    const recentPosts = [...projects].reverse().slice(0, 4);

    // Count categories
    const categoryCountMap = projects.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
    }, {});

    const categories = Object.entries(categoryCountMap).map(([name, count]) => ({
        name,
        count,
    }));

    return (
        <div className="w-full lg:w-1/3">
            {/* Featured Post */}
            <div className="mb-8">
                <div className="relative mb-6">
                    <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                        Featured Post
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black z-0" />
                </div>

                {featured && (
                    <div className="max-w-sm bg-white rounded-xl m-auto md:m-4 transition-shadow capitalize relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <a href={featured.link} target="_blank" rel="noopener noreferrer">
                            <img src={featured.image} alt={featured.title} className="w-full h-48 object-cover" />
                        </a>
                        <div className="p-3 absolute z-1 bg-white bottom-[-20px] left-6 w-80 shadow-[inset_0_30px_60px_-12px_rgba(50,50,93,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.3)]">
                            <a href={featured.link} target="_blank" rel="noopener noreferrer">
                                <h2 className="text-[13px] font-semibold capitalize text-black text-gray-800">
                                    {featured.title}
                                </h2>
                                <p className="text-xs font-semibold text-black mt-2 capitalize">
                                    <span className="font-bold text-black capitalize font-poppins">
                                        {featured.author}
                                    </span> - {featured.date}
                                </p>
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Follow Us */}
            <div>
                <div className="relative mb-6">
                    <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                        Follow Us On
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black z-0" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                    {socialStats.map(({ id, href, iconClass, color, label, count }) => (
                        <div key={id} className="bg-white p-4 rounded shadow border">
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                <span className={`text-2xl ${color}`}>
                                    <i className={iconClass}></i>
                                </span>
                                <p className="mt-2 text-sm font-semibold">{label}</p>
                                <p className="text-sm">{count}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Posts */}
            <div className="mt-10">
                <div className="relative mb-6">
                    <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                        Recent Posts
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black z-0" />
                </div>

                <div className="space-y-5">
                    {recentPosts.map(({ title, image, date, author, link }, idx) => (
                        <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="flex gap-3">
                            <img src={image} alt={title} className="w-30 rounded-xl h-16 object-cover" />
                            <div>
                                <p className="text-[13px] font-semibold text-black leading-tight">{title}</p>
                                <p className="text-xs font-semibold text-black mt-1">
                                    <span className="font-bold">{author}</span> - {date}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="mt-10">
                <div className="relative mb-6">
                    <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                        Categories
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black z-0" />
                </div>

                <ul className="space-y-2">
                    {categories.map((cat, idx) => (
                        <li key={idx} className="flex justify-between text-sm  font-semibold text-[#4553e7]  uppercase cursor-pointer">
                            <span
                                className=""
                                onClick={() => navigate(`/${cat.name.toLowerCase()}`)}
                            >
                                {cat.name}
                            </span>
                            <span>{cat.count}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightSection;
