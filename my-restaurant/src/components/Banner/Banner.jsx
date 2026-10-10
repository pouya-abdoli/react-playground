import img from "../../assets/images/image-4.png";
import banner from "../../assets/images/banner.png";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-137.5">
      <div className="min-h-137.5 flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <img
                src={img}
                className="max-w-107.5 w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="font-bold text-4xl text-center">
                چرا رستوران اژدر
              </h1>
              <p dir="rtl">
                در رستوران اژدر، از لحظه‌ای که وارد می‌شوید تا آخرین لقمه،
                تجربه‌ای متفاوت خواهید داشت. ما با استفاده از مواد اولیه تازه،
                دستورهای اصیل ایرانی و فضایی گرم و صمیمی، تلاش می‌کنیم تا هر
                وعده غذایی به خاطره‌ای خوش تبدیل شود. سرآشپزهای مجرب ما با عشق و
                دقت، هر غذا را با بهترین کیفیت و طعمی بی‌نظیر آماده می‌کنند. از
                چیزبرگر آبدار گرفته تا مرغ کبابی معطر، هر بشقاب داستانی از طعم و
                اصالت را روایت می‌کند. ما به کیفیت، بهداشت و رضایت شما اهمیت
                می‌دهیم و همیشه میزبان گرمی برای شما هستیم.
              </p>
              <div className="flex justify-center gap-6">
                <div>
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500 transition-transform duration-200 hover:scale-110" />
                </div>
                <div>
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-500 transition-transform duration-200 hover:scale-110" />
                </div>
                <div>
                  <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-500 transition-transform duration-200 hover:scale-110" />
                </div>
              </div>
              <div className="flex justify-center ">
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
