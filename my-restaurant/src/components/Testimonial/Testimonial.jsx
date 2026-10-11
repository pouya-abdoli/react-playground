import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import avatar1 from "../../assets/testimonials/avatar1.jpg";
import avatar2 from "../../assets/testimonials/avatar2.jpg";
import avatar3 from "../../assets/testimonials/avatar3.jpg";

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

const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-yellow-400 p-2 text-slate-900 shadow-md hover:bg-yellow-500
      ${direction === "prev" ? "-left-10" : "-right-10"}`}
  >
    {direction === "prev" ? (
      <FaChevronLeft size={18} />
    ) : (
      <FaChevronRight size={18} />
    )}
  </button>
);

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
  };

  return (
    <div className="relative mx-auto max-w-xl px-10 py-10">
      <SliderComponent {...settings}>
        {testimonialData.map((item) => (
          <div key={item.id} className="px-2">
            <div className="rounded-2xl bg-[#1e2a3a] p-8 text-center text-white shadow-xl">
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto mb-5 h-20 w-20 rounded-full border-4 border-white/10 object-cover"
              />

              <span className="absolute right-8 top-6 font-serif text-7xl leading-none text-white/15">
                ”
              </span>

              <p className="mb-5 text-sm leading-8 text-slate-200" dir="rtl">
                {item.text}
              </p>

              <h4 className="text-lg font-semibold">{item.name}</h4>
            </div>
          </div>
        ))}
      </SliderComponent>
    </div>
  );
};

export default Testimonial;
