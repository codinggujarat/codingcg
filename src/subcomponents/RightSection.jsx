import ProjectCard from "../subcomponents/ProjectCard";
import { socialStats } from "../data/socialStats";

const RightSection = ({ featured }) => {
    return (
        <div className="w-full lg:w-1/3">
            <div className="mb-8">
                <div className="relative mb-6">
                    <div className="inline-block bg-black text-white px-4 py-1 uppercase text-sm tracking-widest font-semibold z-10 relative">
                        Featured Post
                    </div>
                    <div className="absolute left-0 bottom-0 w-full h-0.5 bg-black z-0" />
                </div>

                {featured && (
                    <div className="max-w-sm bg-white rounded-xl  m-auto md:m-4 transition-shadow capitalize relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <a href={featured.link} target="_blank" rel="noopener noreferrer">
                            <img src={featured.image} alt={featured.title} className="w-full h-48 object-cover" />
                        </a>
                        <div className="p-3 absolute z-1 bg-white bottom-[-20px] left-6 w-80 shadow-xxl">
                            <a href={featured.link} target="_blank" rel="noopener noreferrer  ">
                                <h2 className="text-lg font-medium capitalize text-black text-gray-800">
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
        </div>
    );
};

export default RightSection;
