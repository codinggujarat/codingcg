import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';


const ProjectCard = ({ title, link, image, date, author }) => {
    return (
        <div className="max-w-sm bg-white  rounded-xl  overflow-hidden  m-auto md:m-4  transition-shadow capitalize" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            </a>
            <div className="p-1">
                <a href={link} target="_blank">
                    <h2 className="text-lg font-medium capitalize text-black text-gray-800 ">{title}</h2>
                    <p className="text-xs font-semibold text-black mt-2 capitalize"><span className="font-bold text-black capitalize font-poppins">{author} </span>- {date}</p>
                    {/* <p className="mt-2">
                        <span className="text-xs border-2 p-1 capitalize font-bold text-black px-2 ">{category}</span>
                    </p> */}
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
