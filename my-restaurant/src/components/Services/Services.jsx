import Img1 from "../../assets/images/cheese.png";
import Img2 from "../../assets/images/image-2.png";
import Img3 from "../../assets/images/image-3.png";
import { DynamicStar } from "react-dynamic-star";

// Food items data
const serviceData = [
  {
    id: 1,
    img: Img1,
    name: "چیزبرگر",
    description: "برگر آبدار با پنیر ذوب‌شده و نان تازه",
  },
  {
    id: 2,
    img: Img2,
    name: "مرغ با برنج",
    description: "مرغ سوخاری طلایی همراه با برنج ایرانی معطر",
  },
  {
    id: 3,
    img: Img3,
    name: "مرغ",
    description: "تکه مرغ کبابی با طعم و ادویه‌های مخصوص",
  },
];

const Services = () => {
  return (
    // Section wrapper with vertical padding
    <div className="py-10">
      <div className="container">

        {/* Section heading */}
        <div className="text-center mb-20 max-w-100 mx-auto">
          <h1 className="text-3xl font-bold">خدمات ما</h1>
        </div>

        {/* Responsive grid: 1 → 2 → 3 columns, fades up on scroll */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 place-items-center"
        >
          {serviceData.map((food) => (

            // Card: yellow background + white text on hover
            <div
              key={food.id}
              className="rounded-2xl bg-white hover:bg-yellow-500 hover:text-white relative shadow-xl duration-300 group w-full max-w-87.5"
            >

              {/* Food image — scales and rotates on card hover */}
              <div className="h-45 flex items-center justify-center">
                <img
                  className="max-w-62.5 block mx-auto transform translate-y-1 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  src={food.img}
                />
              </div>

              {/* Card content: rating, name, description */}
              <div className="p-4 text-center">

                {/* Star rating (4 out of 5) */}
                <div className="w-full flex justify-center">
                  <DynamicStar
                    rating={4}
                    totalStars={5}
                    width={20}
                    height={20}
                    fullStarColor="gold"
                    emptyStarColor="#e4e5e9"
                  />
                </div>
                
                {/* Food name */}
                <h1 className="text-xl font-bold">{food.name}</h1>

                {/* Food description — clamped to 2 lines */}
                <p className="text-gray-500 hover:text-white text-sm line-clamp-2">
                  {food.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
