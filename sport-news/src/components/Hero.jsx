import heroText from "../assets/hero-text.png";
import basketplayer from "../assets/basketball-player.png";
import cartImg1 from "../assets/hero-cart-1.png";
import cartImg2 from "../assets/hero-cart-2.png";
import { Link } from "react-router";

const newsData = [
  {
    id: 1,
    image: cartImg1,
    date: "Race98 - 03 June 2023",
    title: "Ethiopian runners took the top four spots.",
  },
  {
    id: 2,
    image: cartImg2,
    date: "INDYCAR - 03 June 2023",
    title: "IndyCar Detroit: Dixon quickest in second practice",
  },
];

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:items-center overflow-hidden bg-white py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT + CENTER – Responsive Stack on Mobile, Absolute on Desktop */}
          <div className="col-span-1 lg:col-span-8 relative flex flex-col items-center lg:block h-auto lg:h-160">
            
            {/* 1. Hero Text */}
            <div className="relative w-full max-w-100 lg:absolute lg:top-60 lg:-translate-y-1/2 z-10 lg:w-[65%] lg:max-w-145">
              <img
                src={heroText}
                alt="TOP SCORER TO THE FINAL MATCH"
                className="w-full object-contain"
              />
            </div>

            {/* 2. Player Image */}
            <div className="relative w-full max-w-125 -mt-10 lg:mt-0 lg:absolute lg:left-[27%] lg:top-[55%] lg:translate-y-[-55%] z-20 lg:w-full lg:max-w-180">
              <img
                src={basketplayer}
                alt="Basketball Player"
                className="w-full object-contain"
              />
            </div>

            {/* 3. Button */}
            <div className="relative w-full flex flex-col items-center text-center lg:absolute lg:left-[58%] lg:bottom-[8%] z-30 lg:max-w-70 lg:items-start lg:text-left">
              <button className="w-30 h-8 lg:w-64 lg:h-14 bg-[#262626] text-white rounded-xl font-bold text-[10px] lg:text-lg shadow-md hover:bg-gray-800 transition-colors">
                CONTINUE READING
              </button>
            </div>

          </div>

          {/* RIGHT – News cards (Hidden on mobile, flex on lg) */}
          <div className="col-span-1 lg:col-span-4 hidden lg:flex flex-col items-end gap-5 relative z-30">
            <div className="w-67.5 flex justify-start">
              <span className="bg-slate-100 text-gray-400 font-semibold text-sm px-5 py-2 rounded-md">
                Today
              </span>
            </div>

            {newsData.map((card) => (
              <Link
                to={`/blog/${card.id}`}
                key={card.id}
                className="block w-67.5 group"
              >
                <div
                  className="relative w-67.5 h-58.25 rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-[11px] text-gray-300 font-medium tracking-wide">
                      {card.date}
                    </span>
                    <p className="text-sm font-semibold leading-snug mt-1">
                      {card.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
