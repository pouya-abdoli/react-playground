import hero1 from "../assets/images/hero-1.png";
import hero2 from "../assets/images/hero-2.png";
import hero3 from "../assets/images/hero-3.png";
import hero4 from "../assets/images/hero-4.png";
import hero5 from "../assets/images/hero-5.png";

// Side news items shown next to the main hero (right column on desktop)
const sideNewsData = [
  {
    img: hero2,
    author: "Daniel Albarta",
    date: "October 22, 2023",
    title: "‘Washy Clouds and a Weepy Sky Floating Upside Down’...",
    category: "Our Planet",
    readTime: "8 mins read",
  },
  {
    img: hero3,
    author: "Donn Robinson",
    date: "October 21, 2023",
    title: "Rocket Lab Expects to Resume Electron Launches...",
    category: "Space and Universe",
    readTime: "4 mins read",
  },
  {
    img: hero4,
    author: "Natalia Freigman",
    date: "October 21, 2023",
    title: "Curiosity Rover Discovers New Evidence Mars Once...",
    category: "Space and Universe",
    readTime: "7 mins read",
  },
  {
    img: hero5,
    author: "Antonio Roberto",
    date: "October 19, 2023",
    title: "Satellite Data Reveals Ancient Landscape Preserved...",
    category: "Space and Universe",
    readTime: "8 mins read",
  },
];

// Footer news items shown at the bottom (text-only, no images)
const footerNewsData = [
  {
    author: "Donn Robinson",
    date: "October 22, 2023",
    title:
      "If Alien Life is Artificially Intelligent, it May be Stranger than We Can imagine",
    category: "Space and Universe",
    readTime: "9 mins read",
  },
  {
    author: "Max Wellerman",
    date: "October 21, 2023",
    title: "Climate change has pushed Earth into 'Uncharted territory': report",
    category: "Our Planet",
    readTime: "3 mins read",
  },
  {
    author: "Sean Paula",
    date: "October 19, 2023",
    title: "Humanity at Risk from AI ‘Race to the Bottom’, Says Tech Expert",
    category: "Technology",
    readTime: "8 mins read",
  },
  {
    author: "Laura Fransisco",
    date: "October 19, 2023",
    title: "UN Science Body Head Fears Lower Chance of Keeping Global...",
    category: "Our Planet",
    readTime: "10 mins read",
  },
];

const Hero = () => {
  return (
    <div className="mt-12">
      {/* Main News section — stacks vertically on mobile, becomes a row on lg */}
      <div className="flex flex-col lg:flex-row gap-5 text-18">

        {/* Left: main headline + description + meta info */}
        <div className="mx-10 order-1 lg:order-0 ">
          <h2 className=" leading-10 lg:leading-20 text-[32px] lg:text-[72px] lg:max-w-120">
            Russia's Youngest-ever Astronauts Blast Off to Space Station
          </h2>
          <p className="leading-6 text-sm text-white/80 mt-3 max-w-full lg:max-w-120 ">
            On Thursday, three Russian astronauts lifted off on the Moscow-17
            spacecraft from the Sputnik 1 Satellite Launch Center deep in the
            Gobi Desert, heading for the Mir space station for a six-month stay.
          </p>

          {/* Meta row: category | author | date */}
          <span className="leading-5 text-sm text-white/80 flex items-center gap-3 mt-10 lg:mt-20">
            <span>Space and Universe</span>
            <span>|</span>
            <span>Daniel Albarta</span>
            <span>|</span>
            <span>October 22, 2023</span>
          </span>
        </div>

        {/* Middle: main hero image (shown first on mobile via order-first) */}
        <div className="mx-10 order-first lg:order-0 ">
          <img
            className="w-89.75 h-auto lg:h-147.25 object-cover"
            src={hero1}
          />
        </div>

        {/* Right: side news list (shown last on mobile via order-last) */}
        <div className="flex flex-col gap-5 text-base max-w-full lg:max-w-87.5 h-auto lg:h-149.5 order-last lg:order-0 px-4 lg:px-0">
          {sideNewsData.map((news, index) => (
            <div className="flex gap-3 w-full lg:w-102.25" key={index}>

              {/* Thumbnail */}
              <img
                className="w-32.5 h-33.5 rounded-sm object-cover"
                src={news.img}
                alt={news.title}
              />

              {/* Text block: meta on top, title in middle, meta on bottom */}
              <div className="flex flex-col justify-between">
                <span>
                  {news.author} | {news.date}
                </span>
                <p>{news.title}</p>
                <span>
                  {news.category} | {news.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero footer — text-only news row with a top border separator */}
      <div className="flex flex-col lg:flex-row gap-5 m-4 lg:m-10 border-t border-gray-400">
        {footerNewsData.map((news, index) => (
          <div
            className="flex flex-col mt-3 gap-1 max-w-full lg:max-w-100"
            key={index}
          >
            <span>
              {news.author} | {news.date}
            </span>
            <p>{news.title}</p>
            <span>
              {news.category} | {news.readTime}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
