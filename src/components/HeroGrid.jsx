import { projects } from "../data/projectData";

const HeroGrid = () => {
    const latestPosts = [...projects].reverse().slice(0, 4);

    return (
        <section className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 grid-rows-2 h-120 gap-4">
                {latestPosts.map((post, index) => (
                    <a
                        key={index}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
              relative overflow-hidden rounded-xl shadow-lg group
              ${index === 0 ? "md:col-span-1 md:row-span-2" : ""}
              ${index === 1 ? "md:col-span-1 md:row-span-1" : ""}
              ${index === 2 ? "md:col-span-1 md:row-span-1" : ""}
              ${index === 3 ? "md:col-span-2 md:row-span-1" : ""}
            `}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <p className="text-sm font-semibold">{post.date}</p>
                            <h3 className="text-lg font-bold">{post.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default HeroGrid;
