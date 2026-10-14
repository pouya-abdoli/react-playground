import newsimg1 from "../assets/images/news1.png";
import newsimg2 from "../assets/images/news2.png";
import newsimg3 from "../assets/images/news3.png";
import newsimg4 from "../assets/images/news4.png";

// News stories data
const newsData = [
  {
    img: newsimg1,
    title:
      "Rocket Lab Aims to Return to Flight This Year After September Launch Failure",
    desc: "Rocket Lab aims to return to flight this year after September launch failure. The company is still investigating the Sept.",
    category: "Space and Universe",
    readTime: "3 mins read",
  },
  {
    img: newsimg2,
    title:
      "Space Force Planning $8 Billion Satellite Architecture for Nuclear Command and Control",
    desc: "Space Force is planning a new $8 billion satellite architecture for nuclear command and control.",
    category: "Space and Universe",
    readTime: "5 mins read",
  },
  {
    img: newsimg3,
    title:
      "October’s Orionids Meteor Shower are Linked to Halley’s Comet: Date, Time, How and Where to Watch",
    desc: "Want to know how to watch October’s Orionids meteor shower and contemplate the wonders of sky that are linked to Halley’s comet?",
    category: "Space and Universe",
    readTime: "5 mins read",
  },
  {
    img: newsimg4,
    title: "China Sends Three More Astronauts to Space Station",
    desc: "China has sent three astronauts to its space station to replace the current crew. The Shenzhou-17 blasted off from northwestern China.",
    category: "Space and Universe",
    readTime: "7 mins read",
  },
];

const NewsStories = () => {
  return (
    <div className="mx-10">
      {/* Section heading */}
      <h2 className="leading-10 text-[32px] mb-6">Newest Stories</h2>
      
      {/* Responsive grid: 1 col mobile → 2 sm → 3 lg → 4 xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <div className="rounded-lg overflow-hidden" key={index}>

            {/* Card image — fixed size, cover-fit */}
            <div className="w-79 h-98">
              <img className="w-full h-full object-cover" src={news.img} />
            </div>
            
            {/* Card content: title, description, meta */}
            <div className="p-4">
              <h3 className="text-xl font-semibold leading-6 line-clamp-2 my-2">
                {news.title}
              </h3>
              <p className="text-base leading-5 text-black/70 line-clamp-2 my-2">
                {news.desc}
              </p>
              <span className="text-[12px] text-black/60 my-2">
                {news.category} | {news.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsStories;
