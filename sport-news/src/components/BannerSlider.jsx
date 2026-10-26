import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsData from "../data";
import RawSlider from "react-slick";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Link } from "react-router";

// Fix for Vite/CommonJS export issue (prevents default import errors)
const Slider = RawSlider.default || RawSlider;

// Filter data to only include the specific articles for the slider (IDs 21, 22, 23)
const sliderData = newsData.filter((news) => [21, 22, 23].includes(news.id));

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 lg:w-12 lg:h-12 bg-[#262626] text-white flex 
                items-center justify-center rounded-md z-10 hover:bg-gray-700 transition-colors"
      aria-label="Next slide"
    >
      <IoArrowForward size={24} />
    </button>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 lg:w-12 lg:h-12 bg-[#262626] text-white 
                flex items-center justify-center rounded-md z-10 hover:bg-gray-700 transition-colors"
      aria-label="Previous slide"
    >
      <IoArrowBack size={24} />
    </button>
  );
};

const BannerSlider = () => {
  // React Slick configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container py-2 lg:py-0 mb-16 relative">
      <Slider {...settings}>
        {sliderData.map((news) => (
          <div key={news.id}>
            
            {/* Wrap entire slide in a Link to make it clickable */}
            <Link to={`/blog/${news.id}`} className="cursor-pointer block">
              
              {/* Slide Container with background image */}
              <div
                className="relative w-full h-100 md:h-125 lg:h-137 rounded-xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${news.image})` }}
              >
                {/* Dark Overlay: Ensures white text is readable over the image */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content Container: Badge on top, Text on bottom */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 lg:p-14">
                  
                  {/* Top Left: Category Badge */}
                  <div>
                    <span className="inline-block border border-white text-white px-4 py-1.5 rounded text-sm font-medium">
                      {news.category}
                    </span>
                  </div>

                  {/* Bottom Left: Text Content */}
                  <div className="max-w-3xl text-white ml-5">
                    <p className="text-sm md:text-base mb-3 opacity-90">
                      {news.date}
                    </p>
                    
                    {/* line-clamp-3 prevents long text from breaking the layout */}
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      {news.title}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed line-clamp-3">
                      {news.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;