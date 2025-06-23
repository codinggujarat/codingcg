import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';


const ProjectCard = ({ title, link, image, date, author, liveLink, category }) => {
    return (
        <div className="max-w-sm bg-white  rounded-xl  overflow-hidden  m-auto md:m-4  transition-shadow capitalize" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </a>
            <div className="p-2 shadow-[inset_0_30px_60px_-12px_rgba(50,50,93,0.25),inset_0_18px_36px_-18px_rgba(0,0,0,0.3)]  ">
                <a href={link} target="_blank">
                    <h2 className="text-[14px] font-semibold capitalize text-black text-gray-800 ">{title}</h2>
                    <p className="text-xs font-semibold text-black mt-2 capitalize"><span className="font-bold text-black capitalize font-poppins">{author} </span>- {date}</p>
                    <p className="mt-2  right-1 bottom-1 flex gap-2 items-center " >
                        <span className='text-xs  text-[#4553e7] font-bold uppercase '>
                            {category}
                        </span>
                        <span>-</span>
                        {liveLink?.trim() ? (
                            <span style={{
                                borderRadius: '10% 59% 10% 42% / 10% 31% 0% 42%'
                            }} className=" bg-[#4553e7]/10 border border-[#4553e7]/40 backdrop-blur-md text-xs border-2 px-3 py-1 capitalize font-medium text-[#4553e7] rounded-full shadow-md hover:bg-[#4553e7]/80 hover:text-white hover:scale-105 transition-all duration-300 px-2">
                                <a href={liveLink}>LIVE PREVIEW</a>
                            </span>
                        ) : null}
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
