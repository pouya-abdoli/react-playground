import img from "../../assets/images/image-4.png";
import banner from "../../assets/images/banner.png";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    // Section wrapper with fixed min height
    <div className="min-h-137.5">

      {/* Centered inner wrapper with backdrop blur */}
      <div className="min-h-137.5 flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">

          {/* Two-column grid: image on one side, content on the other */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Left column: food image — fades up on scroll */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex justify-center items-center"
            >
              <img
                src={img}
                className="max-w-107.5 w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "
              />
            </div>

            {/* Right column: heading, description, icons, button */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">

              {/* Heading — fades down */}
              <h1
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
                className="font-bold text-4xl text-center"
              >
                چرا رستوران اژدر
              </h1>

              {/* Description — fades up */}
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                dir="rtl"
              >
                در رستوران اژدر، از لحظه‌ای که وارد می‌شوید تا آخرین لقمه،
                تجربه‌ای متفاوت خواهید داشت. ما با استفاده از مواد اولیه تازه،
                دستورهای اصیل ایرانی و فضایی گرم و صمیمی، تلاش می‌کنیم تا هر
                وعده غذایی به خاطره‌ای خوش تبدیل شود. سرآشپزهای مجرب ما با عشق و
                دقت، هر غذا را با بهترین کیفیت و طعمی بی‌نظیر آماده می‌کنند. از
                چیزبرگر آبدار گرفته تا مرغ کبابی معطر، هر بشقاب داستانی از طعم و
                اصالت را روایت می‌کند. ما به کیفیت، بهداشت و رضایت شما اهمیت
                می‌دهیم و همیشه میزبان گرمی برای شما هستیم.
              </p>

              {/* Feature icons — staggered zoom-in, scale on hover */}
              <div className="flex justify-center gap-6">
                <div data-aos="zoom-in" data-aos-delay="300">
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500 transition-transform duration-200 hover:scale-110" />
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-500 transition-transform duration-200 hover:scale-110" />
                </div>
                <div data-aos="zoom-in" data-aos-delay="500">
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-500 transition-transform duration-200 hover:scale-110" />
                </div>
              </div>

              {/* Order button — fades up last */}
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
                className="flex justify-center"
              >
                <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-white py-1 px-4 rounded-full flex items-center gap-3">
                  ثبت سفارش
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
