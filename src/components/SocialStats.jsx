const stats = [
    { icon: "🎥", label: "SUBSCRIBER", value: 510 },
    { icon: "💼", label: "CONNECTIONS", value: 5496 },
    { icon: "📸", label: "FOLLOWERS", value: 850 },
    { icon: "🐙", label: "FOLLOWERS", value: 19 },
];

const SocialStats = () => (
    <div>
        <h2 className="text-xl font-semibold mb-4 border-b-2 inline-block">Follow Us On</h2>
        <div className="grid grid-cols-2 gap-4 text-center">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                    <span className="text-2xl">{stat.icon}</span>
                    <p className="mt-2 text-sm font-semibold">{stat.label}</p>
                    <p className="text-sm">{stat.value}</p>
                </div>
            ))}
        </div>
    </div>
);

export default SocialStats;
  