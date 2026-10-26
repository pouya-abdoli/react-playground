import { Link } from "react-router";
import newsData from "../data";

// Filter data outside the component so it only runs once, not on every render
const articlesData = newsData.filter(
  (article) => article.id >= 7 && article.id <= 9,
);

const SportsArticle = () => {
  return (
    <section>
      {/* Responsive CSS Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-6 lg:py-20">

        {/* Loop through the filtered data */}
        {articlesData.map((article) => (
          <Link
            to={`blog/${article.id}`}
            key={article.id}
            className="flex flex-col group"
          >
            {/* Image and Category Badge */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-62 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 px-3 py-1 text-white rounded-md text-xs font-semibold border bg-black/40 backdrop-blur-sm">
                {article.category}
              </span>
            </div>

            {/* Text Content */}
            <div className="mt-4 flex flex-col flex-1">

              {/* Author Profile & Name */}
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={article.profile}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <p className="text-sm font-medium text-gray-700">
                  {article.author}
                </p>
              </div>
            </div>

            {/* Date, Title, Description */}
            <div>
              <span className="text-xs text-gray-500 block mb-3">
                {article.date}
              </span>
              <h5 className="text-xl font-bold text-gray-600 mb-2 duration-300 transition-colors group-hover:text-blue-600">
                {article.title}
              </h5>
              <p className="text-gray-600 text-sm line-clamp-3">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SportsArticle;
