import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaPaperPlane,
} from "react-icons/fa";

const footerLinks = [
  {
    heading: "Space and Universe",
    items: [
      "NASA Missions",
      "Extraterrestrials",
      "New Planet Discovery",
      "Neighborhood Planets",
      "Satellite News",
      "Astronaut Insights",
    ],
  },
  {
    heading: "Our Planet",
    items: [
      "Earth",
      "Discover Animals",
      "Plants and the Life",
      "Human & Civilization",
      "History & Future",
      "Predict the Future",
    ],
  },
  {
    heading: "Health and Science",
    items: [
      "Newest Science",
      "Science Projects",
      "Science for Humanity",
      "The Reality of Science",
      "Human Health",
      "Animals & Plants Health",
    ],
  },
  {
    heading: "Technology",
    items: [
      "Newest Technology",
      "Technology for Humanity",
      "Technology for Animals",
      "Technology for Plants",
      "Technology for the Planet",
      "Technology for the Future",
    ],
  },
  {
    heading: "Our Community",
    items: [
      "About Us",
      "Advertise",
      "Events",
      "People Insights",
      "Satellite News",
      "Astronaut Insights",
    ],
  },
  {
    heading: "Our Podcasts",
    items: [
      "It's All About Earth!",
      "Become an Astronauts",
      "Discover Other Life?",
      "Our Neighborhoods",
      "Earth From Space",
      "The Future of Human",
    ],
  },
];

const Footer = () => {
  return (
    <div className="mx-10 py-10">
      {/* Top row: logo + socials | newsletter */}
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
        {/* Left: logo + social icons */}
        <div>
          <h2>Indie Space</h2>
          <div className="flex gap-3 mt-3 justify-center">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagr am /></a>
            <a href="#" className="social-icon"><FaPinterestP /></a>
            <a href="#" className="social-icon"><FaPaperPlane /></a>
          </div>
        </div>

        {/* Right: newsletter */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <div className="relative w-80 md:mt-8">
            <input
              type="email"
              placeholder="Enter your email for newsletter ..."
              className="w-full h-10 bg-transparent border border-white/30 rounded-full
                         px-4 pr-10 text-sm outline-none focus:border-white"
            />
            <button
              aria-label="Subscribe"
              className="absolute right-3 top-1/2 -translate-y-1/2
                         text-white/70 hover:text-white"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
