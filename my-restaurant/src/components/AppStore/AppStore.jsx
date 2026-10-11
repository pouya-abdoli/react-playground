import AppStoreImg from "../../assets/images/app_store.png";
import PlayStoreImg from "../../assets/images/play_store.png";
import Gif from "../../assets/images/mobile_bike.gif";

const AppStore = () => {
  return (
    <div className="bg-gray-100 py-14">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              className="text-2xl text-center sm:text-4xl text-gray-500"
              dir="rtl"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              اپلیکیشن اژدر برای IOS , Android
            </h1>
            <div className="flex flex-wrap justify-center items-center sm:justify-items-start gap-7">
              <img
                data-aos="zoom-in"
                data-aos-delay="300"
                src={AppStoreImg}
                className="max-w-50 sm:max-w-45 md:max-w-55"
              />
              <img
                data-aos="zoom-in"
                data-aos-delay="400"
                src={PlayStoreImg}
                className="max-w-50 sm:max-w-45 md:max-w-55"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <img
              src={Gif}
              className="max-w-[70%] sm:max-w-full block rounded-md mx-auto mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
