import LOGO from "../../assets/images/food-logo.png";

const Footer = () => {
  const linkSections = [
    {
      title: "دسترسی سریع",
      links: [
        "صفحه اصلی",
        "پرفروش‌ترین‌ها",
        "تخفیف‌ها و پیشنهادها",
        "تماس با ما",
        "سوالات متداول",
      ],
    },
    {
      title: "نیاز به کمک دارید؟",
      links: [
        "اطلاعات ارسال",
        "رویه بازگشت و بازپرداخت",
        "روش‌های پرداخت",
        "پیگیری سفارش",
        "تماس با ما",
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div
        dir="rtl"
        className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10 py-8 md:py-10 border-b border-gray-500/30 text-gray-500"
      >
        <div className="w-full md:max-w-102.5">
          <div className="flex items-center  justify-center md:justify-start gap-2 md:gap-3">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900">
              اژدر
            </h1>
            <img className="w-3 sm:w-10 md:w-12" src={LOGO} alt="logo" />
          </div>
          <p className="mt-4 md:mt-6 text-sm md:text-base leading-7">
            در رستوران اژدر، با استفاده از مواد اولیه تازه و دستورهای اصیل
            ایرانی، تجربه‌ای بی‌نظیر از طعم و کیفیت را برای شما فراهم می‌کنیم.
            سرآشپزهای مجرب ما با عشق و دقت، هر غذا را با بهترین کیفیت و طعمی
            بی‌نظیر آماده می‌کنند. از چیزبرگر آبدار گرفته تا مرغ کبابی معطر، هر
            بشقاب داستانی از طعم و اصالت را روایت می‌کند. ما به کیفیت، بهداشت و
            رضایت شما اهمیت می‌دهیم و همیشه میزبان گرمی برای شما هستیم.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-10 w-full md:w-[45%] md:py-20">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-2 md:mb-5">
                {section.title}
              </h3>
              <ul className="text-xs sm:text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p
        className="py-4 text-center text-xs sm:text-sm md:text-base text-gray-500/80"
        dir="rtl"
      >
        تمامی حقوق محفوظ است © ۱۴۰۵ — رستوران اژدر
      </p>
    </div>
  );
};

export default Footer;
