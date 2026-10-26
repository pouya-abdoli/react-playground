import newsbg from "../assets/news-bg.png";
import newsText from "../assets/news-text.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";

const NewsLetter = () => {
  // Data-driven array for social icons to keep the JSX clean
  const socialLinks = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <FaTwitter /> },
  ];

  return (
    <section>
      {/* Main container */}
      <div className="pb-16 container">
        
        {/* Responsive Grid: 1 column on mobile, 2 on desktop. Gray card background. */}
        <div className="bg-slate-200 rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Text, Form, Socials */}
          <div className="flex flex-col p-8 lg:p-12">
            
            {/* Newsletter Graphic */}
            <img src={newsText} className="mb-4 lg:mb-8" alt="Newsletter" />

            {/* Subscription Form */}
            <div className="flex mb-4 lg:mb-8">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="h-8 lg:h-14 w-full px-2 lg:px-4 text-sm lg:text-xl text-gray-700 border border-gray-300 rounded-l-lg focus:outline-none focus:border-gray-500"
              />
              {/* Arrow icon */}
              <button className="h-8 w-10 lg:h-14 lg:w-16 bg-black text-white flex items-center justify-center rounded-r-lg hover:bg-gray-800 transition-colors">
                <FaArrowRight className="lg:text-2xl -rotate-35" />
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-5 justify-center lg:justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="w-7 h-7 lg:w-11 lg:h-11 bg-black text-white flex justify-center items-center rounded-md hover:bg-gray-800 transition-colors"
                >
                  <span className="text-xl lg:text-2xl">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Decorative Background Image */}
          <div>
            <img src={newsbg} alt="Newsletter Background" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;