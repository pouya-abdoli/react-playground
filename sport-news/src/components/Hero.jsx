import basket from "../assets/basketball-bg.png";
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
    title: " Ethiopian runners took the top four spots.",
    description: "",
    category: "Athletics",
    introduction:
      "In a breathtaking showcase of endurance, speed, and determination, Ethiopian runners once again proved why they are among the most dominant forces in long-distance running. At a recent high-profile race, Ethiopian athletes swept the top four spots, leaving the global running community in awe of their incredible performance. This remarkable achievement not only highlights Ethiopia’s rich running heritage but also cements its status as a powerhouse in the world of athletics.",
    desc_part1:
      "The event, [name of the race, e.g., 'he London Marathon, the World Athletics Championships, or a major international half-marathon'], featured some of the world’s best distance runners. From the starting gun, it was clear that the Ethiopian contingent had come prepared to make a statement. The athletes set a blistering pace, quickly separating themselves from the rest of the field.As the race progressed, the Ethiopian runners showcased their trademark combination of tactical brilliance and raw speed. Working together to maintain their lead, they left their competitors struggling to keep up. By the final stretch, it was an all-Ethiopian affair, with the top four spots firmly secured.",
    title_part1: "The Race:",
    desc_part2:
      "[Name of the First-Place Finisher]: Crossing the finish line in first place, [Name] delivered a masterclass in long-distance running. Known for [briefly describe their background or achievements, e.g., 'their explosive finishing kick or consistent performances in major races'], [Name] added another impressive victory to their growing legacy.[Name of the Second-Place Finisher]: Close behind was [Name], who demonstrated incredible resilience and determination. Their performance was a testament to the depth of talent within Ethiopia’s running community.[Name of the Third-Place Finisher]: Rounding out the podium was [Name], whose strong finish highlighted the teamwork and camaraderie among the Ethiopian athletes.[Name of the Fourth-Place Finisher]: Securing fourth place, [Name] completed the historic sweep, ensuring that Ethiopia’s dominance was on full display.",
    title_part2: "The Champions:",
    desc_part3:
      "Ethiopia’s success in distance running is no accident. The country’s high-altitude training grounds, combined with a culture that celebrates and nurtures running talent, have produced some of the greatest athletes in history. Icons like Haile Gebrselassie, Kenenisa Bekele, and Tirunesh Dibaba have paved the way for the current generation, inspiring young runners to follow in their footsteps.This latest victory is a continuation of that legacy. By taking the top four spots, these athletes have not only made their country proud but also sent a clear message to the world: Ethiopia remains a force to be reckoned with in the world of distance running.",
    title_part3: "A Legacy of Excellence:",
    desc_part4:
      "The running community has been quick to celebrate this historic achievement. Fans, analysts, and fellow athletes have taken to social media to praise the Ethiopian runners for their incredible performance. Many have noted the strategic brilliance and teamwork displayed during the race, as well as the sheer talent of the individual athletes.For Ethiopia, this victory is a source of national pride. It reinforces the country’s reputation as a breeding ground for world-class runners and serves as an inspiration for the next generation of athlete",
    title_part4: "The Global Reaction:",
    desc_part5:
      "Ethiopia’s sweep of the top four spots in [name of the race] is a testament to the country’s enduring excellence in distance running. It’s a story of talent, hard work, and unwavering determination—a story that continues to inspire runners and fans around the world. As we celebrate this incredible achievement, one thing is clear: the legacy of Ethiopian running is stronger than ever, and the future looks brighter than ever.",
    title_part5: "Conclusion:",
  },
  {
    id: 2,
    image: cartImg2,
    date: "NDYCAR - 03 June 2023",
    title: " IndyCar Detroit: Dixon quickest in second practice",
    description: "",
    category: "Race",
    introduction:
      "The Motor City is buzzing with excitement as the NTT IndyCar Series takes over the streets of Detroit for the Detroit Grand Prix. In a thrilling second practice session, six-time IndyCar champion Scott Dixon showcased why he’s one of the greatest drivers in the sport’s history, setting the fastest time and sending a clear message to his competitors. With the race weekend heating up, Dixon’s performance has set the stage for what promises to be an electrifying event.",
    desc_part1:
      "Driving for Chip Ganassi Racing, Scott Dixon laid down a blistering lap time of [insert time, e.g., '1:15.123'] around the challenging street circuit, edging out his rivals and securing the top spot on the timing sheets. Known for his consistency and ability to adapt to any track, Dixon demonstrated his mastery of the Detroit circuit, navigating its tight corners, bumpy surfaces, and long straights with precision.Dixon’s performance in the second practice session is a strong indicator of his potential for the rest of the weekend. As one of the most experienced drivers on the grid, he knows how to balance speed with strategy, making him a formidable contender for pole position and the race win.",
    title_part1: "Dixon’s Dominance:",
    desc_part2:
      "While Dixon stole the show, the competition was fierce. Close behind were [insert names of other top drivers, e.g., 'Josef Newgarden, Pato O’Ward, and Colton Herta'], who all showed impressive pace and are expected to challenge for the top spots in qualifying and the race. The tight margins between the drivers highlight the competitive nature of the IndyCar Series, where every tenth of a second counts.The Detroit street circuit is known for its unpredictability, and the second practice session provided a glimpse of the challenges drivers will face. With limited overtaking opportunities and a high risk of incidents, strategy and patience will be key to success.",
    title_part2: "The Competition:",
    desc_part3:
      "Practice sessions are not just about speed; they’re also an opportunity for teams to fine-tune their setups and strategies. Chip Ganassi Racing’s strong showing with Dixon suggests they’ve found a sweet spot with their car’s setup. Meanwhile, teams like Team Penske and Arrow McLaren are likely analyzing data to close the gap and optimize their performance for qualifying.Tire management will also play a crucial role, as the abrasive surface of the Detroit circuit can quickly wear down tires. Teams will need to balance aggression with conservation to ensure their drivers have the best chance of success.",
    title_part3: "Team Strategies:",
    desc_part4:
      "The Detroit Grand Prix is a fan-favorite event, and the excitement is palpable both on and off the track. The vibrant atmosphere of the Motor City, combined with the high-speed action of IndyCar, creates a unique and thrilling experience for spectators. With Dixon leading the charge, fans are eagerly anticipating a weekend filled with drama, strategy, and wheel-to-wheel racing.",
    title_part4: "Fan Excitement:",
    desc_part5:
      "Scott Dixon’s standout performance in the second practice session has set the tone for an exciting weekend of racing in Detroit. With his unmatched skill and experience, Dixon has positioned himself as the driver to beat. But in the highly competitive IndyCar Series, nothing is guaranteed. As the engines roar and the cars hit the track, fans can expect a weekend full of high-speed action, strategic battles, and unforgettable moments. The Detroit Grand Prix is here, and it’s shaping up to be a classic.",
    title_part5: "Conclusion:",
  },
];

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-start min-h-screen bg-no-repeat"
      style={{ backgroundImage: `url(${basket})` }}
    >
      {/* LEFT SECTION: Hero Typography */}
      <div className="flex flex-col items-start justify-center ml-55 -mt-40">
        <img src={heroText} className="z-10 mt-20 lg:w-125 lg:-mt-30" />
      </div>

      {/* CENTER SECTION: Player Image & CTA */}
      <div className="flex flex-col items-center justify-center text-center lg:-ml-66 z-10">        
        <img
          src={basketplayer}
          className="w-full max-w-155 object-contain mb-2  "
        />
        <p className="text-[#262626] max-w-md mb-6 px-4">
          The EuroLeague Finals Top Scorer is the individual award for the
          player that gained the highest points in the EuroLeague Finals
        </p>
        <button
          className="w-71 h-15 text-white bg-[#262626] rounded transition 
                    hover:bg-gray-800"
        >
          Continue Reading
        </button>
      </div>

      {/* RIGHT SECTION: News Cards (Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-4 lg:-mt-35 ml-10">
        {newsData.map((card) => (

          // Navigates to the article detail page using the dynamic ID
          <Link to={`/blog/${card.id}`} key={card.id}>

            {/* Card Container: Uses inline style for the dynamic background image */}
            <div
              className="w-67 h-58 bg-cover bg-center rounded-lg p-4
                             text-white flex flex-col justify-end relative overflow-hidden"
              style={{ backgroundImage: `url(${card.image})` }}
            >

              {/* Gradient Overlay: Ensures text remains readable over the image */}
              <div
                className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t
                             from-black/40 backdrop-blur-sm"
              ></div>
              
              {/* Text Content: Positioned relatively to sit above the gradient overlay */}
              <span className="text-xs text-white relative">{card.date}</span>
              <p className="text-sm relative">{card.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
