const FeaturedPost = ({ title, date, image }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">CodingGujarat - {date}</p>
        </div>
    </div>
);

export default FeaturedPost;
  