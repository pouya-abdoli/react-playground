import { Link, useParams } from "react-router";
import newsData from "../data";

const BlogDetails = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === parseInt(id));

  // 404 Fallback
  if (!news)
    return <div className="text-center py-10">Couldn't find the article</div>;

  // Get related articles (same category, exclude current)
  const relatedNews = newsData.filter(
    (item) => item.category === news.category && item.id !== news.id,
  );

  return (
    <div
      className="flex justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 my-8 sm:my-12 md:my-16 lg:my-20"
    >
      <div className="w-full max-w-225 ">

        {/* Title & Meta */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold ">{news.title}</h2>
          <div className="flex text-xs text-[#262626]/60 mt-2">
            <p className="">{news.date}</p>
            <p className="mx-2">|</p>
            <p>{news.category}</p>
          </div>
        </div>

        {/* Cover Image */}
        <div>
          <img
            src={news.image}
            alt={news.title}
            className="rounded-md w-full object-cover h-50 sm:h-75 md:h-120"
          />
        </div>

        {/* Main Content */}
        <div>
          <h4 className="font-semibold text-base sm:text-lg text-[#262626] mt-6">
            Introduction
          </h4>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            {news.introduction}
          </p>

          {/* Dynamic Sections */}
          {news.sections.map((section, index) => (
            <div key={index} className="my-4">
              <h4 className="font-semibold text-base sm:text-lg text-[#262626] mt-6">
                {section.title}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                {section.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Related News */}
        {/* Only render this section if related articles exist */}
        {relatedNews.length > 0 && (
          <div className="my-8 pt-8">
            <h3 className="text-xl font-semibold ">Related News</h3>

            {/* CSS Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {relatedNews.map((related) => (

                // Card Wrapper with hover effects (shadow + slight scale)
                <div
                  key={related.id}
                  className="w-full h-auto rounded-md shadow-md cursor-pointer hover:shadow-2xl
                             transition duration-300 hover:scale-101 border border-gray-100"
                >
                  
                  {/* Wrap entire card in Link to make the whole thing clickable */}
                  <Link to={`/blog/${related.id}`}>
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-50 object-cover rounded-t-md "
                    />
                    <div className="p-5">
                      <h5 className="text-base sm:text-lg font-semibold line-clamp-2">
                        {related.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#696868] my-2">
                        {related.date}
                      </p>

                      {/* Category Badge */}
                      <span className=" bg-[#262626] text-xs sm:text-sm font-semibold text-white px-3 py-1 rounded-full">
                        {related.category}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
