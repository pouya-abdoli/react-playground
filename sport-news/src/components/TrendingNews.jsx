import { Link } from "react-router";
import newsData from "../data.js";

const TrendingNews = () => {
  // Data preparation: filter for the left list, find the single featured item for the right
  const leftItems = newsData.filter((news) => news.id >= 3 && news.id <= 5);
  const rightItem = newsData.find((news) => news.id === 6);

  return (
    <section className="container lg:py-25 py-5">
      {/* Parent Container: lg:h-152 (608px) locks the height on desktop for a perfect side-by-side match */}
      <div className="w-full bg-slate-100 rounded-xl flex flex-col lg:flex-row gap-6 lg:gap-8 overflow-hidden lg:h-152">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/2 flex flex-col p-6 lg:p-8 h-full">
          <h2 className="text-2xl font-bold mb-2">Trending News</h2>

          {/* justify-between distributes the 3 items evenly within the fixed height */}
          <div className="flex flex-col justify-between flex-1 gap-y-12 lg:gap-y-4">
            {leftItems.map((news) => (
              <Link key={news.id} to={`/blog/${news.id}`} className="group">
                
                {/* items-stretch makes the text box match the image height */}
                <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                  <img
                    src={news.image}
                    alt={news.title}
                    // shrink-0 prevents text from squishing the image
                    className="w-full sm:w-52 lg:w-60 h-36 lg:h-40 object-cover rounded-md shrink-0"
                  />

                  {/* justify-center vertically centers the text block relative to the image */}
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="block text-xs text-gray-500 mb-1">
                      {news.date}
                    </span>
                    {/* line-clamp-2 truncates long titles to protect the layout */}
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-black transition-colors leading-snug line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {news.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 relative min-h-96 lg:min-h-full">
          <Link
            to={`/blog/${rightItem.id}`}
            // absolute inset-0 forces the link and its contents to fill the entire right column
            className="absolute inset-0 group flex flex-col justify-between"
          >
            {/* Background Image fills the container */}
            <img
              src={rightItem.image}
              alt={rightItem.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay: z-index defaults, sits above image but below text */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* Top Content: pushed to top by justify-between */}
            <div className="relative z-10 p-6 md:p-8">
              <span className="inline-block border border-white py-1 px-4 text-white rounded-md text-sm md:text-base font-medium">
                {rightItem.category}
              </span>
            </div>

            {/* Bottom Content: pushed to bottom by justify-between */}
            <div className="relative z-10 text-white p-6 md:p-8">
              <span className="block text-sm mb-2 text-gray-200">
                {rightItem.date}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {rightItem.title}
              </h3>
            </div>
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default TrendingNews;