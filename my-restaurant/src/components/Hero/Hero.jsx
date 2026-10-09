import { useState } from "react";
import image_1 from "../../assets/images/hero-1.png";
import image_2 from "../../assets/images/hero-2.png";
import image_3 from "../../assets/images/hero-3.png";

const imageList = [
  {
    id: 1,
    img: image_1,
  },
  {
    id: 2,
    img: image_2,
  },
  {
    id: 3,
    img: image_3,
  },
];

const Hero = () => {
  const [imgId, setImgId] = useState(image_1);

  return (
    <div className="bgImage min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center duration-200">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              به اژدر
              <span className="text-yellow-500">خوش آمدید</span>
            </h1>
            <p className="text-sm">
              تجربه‌ای بی‌نظیر از طعم‌های اصیل ایرانی را در رستوران اژدر بچشید.
              با بهترین کیفیت و فضایی گرم، میزبان شما هستیم.
            </p>
            <div>
              <button className="bg-linear-to-r from-yellow-400 to-yellow-500 text-white py-1 px-4 rounded-full hover:scale-105 duration-200">
                ثبت سفارش
              </button>
            </div>
          </div>

          {/* image section */}
          <div className="min-h-[450px] sm: min-h-[500px] flex justify-center items-center relative order-1 sm:order-2 ">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center ">
              <img
                src={imgId}
                alt=""
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-2 animate-spin-slow "
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg: right-10 bg-white/35 rounded-full">
              {imageList.map((item) => (
                <img
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105"
                  key={item.id}
                  src={item.img}
                  onClick={() => {
                    setImgId(
                      item.id === 1
                        ? image_1
                        : item.id === 2
                          ? image_2
                          : image_3,
                    );
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
