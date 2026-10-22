import catImg1 from "../assets/category-1.png";
import catImg2 from "../assets/category-2.png";
import catImg3 from "../assets/category-3.png";
import catImg4 from "../assets/category-4.png";
import ctImg1 from "../assets/ct1.png";
import ctImg2 from "../assets/ct2.png";
import ctImg3 from "../assets/ct3.png";
import ctImg4 from "../assets/ct4.png";

// Reusable component for the gray text boxes
const GrayBox = ({ image }) => (
  // max-w-72 caps the size on desktop, while w-full allows it to shrink on mobile
  <div className="w-full max-w-72 h-28 bg-slate-100 flex items-center justify-center rounded-sm">
    <img src={image} className="w-48 h-20 object-contain" />
  </div>
);

const Category = () => {
  // Data array uses 'topBox' boolean to dictate the zig-zag layout (box top vs box bottom)
  const categories = [
    { id: 1, topBox: true, img: catImg1, textImg: ctImg1 },
    { id: 2, topBox: false, img: catImg2, textImg: ctImg2 },
    { id: 3, topBox: true, img: catImg3, textImg: ctImg3 },
    { id: 4, topBox: false, img: catImg4, textImg: ctImg4 },
  ];

  return (
    <section className="container py-16">
      <h4 className="text-2xl font-bold mb-6">Category</h4>

      {/* Responsive CSS Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        
        {/* Loop through data to render each column */}
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 w-full max-w-72"
          >
            {/* Conditional render: GrayBox on top if topBox is true */}
            {item.topBox && <GrayBox image={item.textImg} />}

            {/* Main category image */}
            <img
              src={item.img}
              alt="Category"
              className="w-full h-72 object-contain"
            />

            {/* Conditional render: GrayBox on bottom if topBox is false */}
            {!item.topBox && <GrayBox image={item.textImg} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;