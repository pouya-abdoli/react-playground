import Slider from "react-slick";
import avatar1 from "../../assets/testimonials/avatar1.jpg";
import avatar2 from "../../assets/testimonials/avatar2.jpg";
import avatar3 from "../../assets/testimonials/avatar3.jpg";

// Handle the CJS/ESM interop (the key fix for the "got: object" error)
const SliderComponent = Slider.default || Slider;

const testimonialData = [
  {
    id: 1,
    name: "کوروش",
    text: "غذاشون فوق‌العاده بود! چیزبرگرشون واقعاً آبدار و خوشمزه بود، مواد اولیه تازه و کیفیت عالی. قطعاً دوباره میام.",
    img: avatar1,
  },
  {
    id: 2,
    name: "رزا",
    text: "مرغ کبابی با برنج ایرانی‌شون بی‌نظیر بود. طعم ادویه‌ها و پخت دقیق غذا واقعاً حرفه‌ای بود. به همه پیشنهاد می‌کنم.",
    img: avatar2,
  },
  {
    id: 3,
    name: "آریا",
    text: "بهترین رستورانی که تا حالا رفتم. طعم اصیل ایرانی، بشقاب‌های پر و قیمت منصفانه. هر لقمه‌اش خاطره‌انگیز بود.",
    img: avatar3,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <SliderComponent {...settings}>
        {testimonialData.map((item) => (
          <div key={item.id} className="px-3">
            <div className="bg-[#1e2a3a] rounded-2xl p-8 text-center text-white relative shadow-xl">
              {/* Avatar */}
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-5 border-4 border-white/10"
              />

              {/* Quote */}
              <span className="absolute top-6 right-8 text-7xl text-white/15 font-serif leading-none">
                ”
              </span>

              {/* Text */}
              <p className="text-sm leading-8 text-slate-200 mb-5 direction-rtl">
                {item.text}
              </p>

              {/* Name */}
              <h4 className="text-lg font-semibold">{item.name}</h4>
            </div>
          </div>
        ))}
      </SliderComponent>
    </div>
  );
};

export default Testimonial;
