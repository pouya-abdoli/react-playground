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
  <div className="w-67 h-29 bg-[#EBEEF3] flex items-center justify-center ">
    <img src={image} className="w-51 h-19 object-contain" />
  </div>
);

const Category = () => {
  const categories = [
    { id: 1, topBox: true, img: catImg1, textImg: ctImg1 },
    { id: 2, topBox: false, img: catImg2, textImg: ctImg2 },
    { id: 3, topBox: true, img: catImg3, textImg: ctImg3 },
    { id: 4, topBox: false, img: catImg4, textImg: ctImg4 },
  ];
  return (
    // Main section wrapper with standard responsive spacing
    <section className="container mx-auto px-46">
      <h4 className="text-2xl font-bold mb-6">Category</h4>

      {/* 
        Parent Flex Container: 
        - Stacks vertically on mobile (flex-col)
        - Displays side-by-side on desktop (lg:flex-row)
        - gap-8 adds space between the columns 
      */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

        {/* Loop through the data array to render each column */}
        {categories.map((item) => (

          // Individual Column: Flex column to stack the gray box and image
          <div key={item.id} className="flex flex-col items-center gap-4 w-67">

            {/* If topBox is true, render the GrayBox FIRST (Top) */}
            {item.topBox && <GrayBox image={item.textImg} />}

            {/* Render the main category image */}
            <img src={item.img} className="w-full h-72 object-contain" />
            
            {/* If topBox is false, render the GrayBox SECOND (Bottom) */}
            {!item.topBox && <GrayBox image={item.textImg} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;