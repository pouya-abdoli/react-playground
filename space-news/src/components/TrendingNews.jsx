import img1 from "../assets/images/trending.png";
import imgA from "../assets/images/A.png";

const TrendingNews = () => {
  return (
    <div className="mx-4 md:m-10">
      <h2 className="text-3xl mb-6">Trending News</h2>

      {/* Main layout: stacks on mobile, side-by-side on lg */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-10">

        {/* Left: trending image */}
        <div className="w-full lg:w-202 h-auto lg:mt-22">
          <img
            src={img1}
            className="w-full h-full object-cover rounded-md max-h-100 sm:max-h-125 lg:max-163"
          />
        </div>

        {/* Right: article content */}
        <div className="w-full max-w-full lg:max-w-127">

          {/* Headline */}
          <h3 className="text-2xl lg:text-[48px] leading-8 lg:leading-16">
            Axiom Space Refines Training for Next Astronauts Mission
          </h3>
          
          {/* Two-column article body (stacks on mobile, side-by-side on md) */}
          <div className="flex flex-col md:flex-row gap-4 text-sm leading-6 text-[#303030]">

            {/* First column */}
            <div className="w-full md:max-w-62 ">

                {/* Small "A" logo image */}
              <div className="flex gap-4 mb-4">
                <img src={imgA} />
                <p>
                  n American company that organises visits to the International
                  Space Station.
                </p>
              </div>
              <p>
                Houston-based Axiom has signed a memorandum of understanding
                with the UK Space Agency to try to make it happen.
                <br />
                <br />
                The project would probably cost £200m or more, but the idea is
                that it would be funded commercially. There would be no
                contribution from UK taxpayers. Axiom told the BBC that
                conversations with corporations and institutions interested in
                providing finance were already under way.
              </p>
            </div>

            {/* Second column */}
            <div className="w-full md:max-w-62 ">
              <p>
                The last UK individual to go into orbit was Tim Peake, who flew
                to the ISS as a European Space Agency (Esa) astronaut in 2015.
                <br />
                <br />
                "This is an exciting opportunity and actually unique," he
                commented. "No-one has done a 'national mission', commercially,
                like this before. It's a new model and would be paving the way
                for how we do space in the future."
                <br />
                <br />
                Details are sparse at the moment. No crew has been chosen, nor
                is there a concept yet for how it would be selected.
              </p>
            </div>
          </div>
          
          {/* Footer: meta info on left, CTA button on right */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-6 gap-4">
            <span className="text-sm text-[#3D3D3D]">
              Space and Universe | 9 mins read
            </span>
            <button className="border bg-black text-white rounded-2xl text-[12px] px-4 py-2 h-9">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
