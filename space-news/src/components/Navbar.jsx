import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  // State to track whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">

      {/* Desktop navbar — hidden on mobile, shown from md (768px) and up */}
      <div className="hidden md:flex justify-between mx-6">

        {/* Logo / brand name */}
        <div className="my-3">
          <h2 className="text-xl font-bold leading-7">Indie Space</h2>
        </div>

        {/* Desktop navigation links */}
        <div className="my-3">
          <ul className="flex justify-center gap-5">
            <li className="leading-4 text-[12px] cursor-pointer">News</li>
            <li className="leading-4 text-[12px] cursor-pointer">Opinion</li>
            <li className="leading-4 text-[12px] cursor-pointer">Technology</li>
            <li className="leading-4 text-[12px] cursor-pointer">Our Planet</li>
            <li className="leading-4 text-[12px] cursor-pointer">
              Health and Science
            </li>
          </ul>
        </div>
        
        {/* Newsletter signup button */}
        <div className="my-3">
          <button className="border border-2xl leading-4 text-[12px] px-4 py-2 h-8 rounded-3xl">
            Sign up for our newsletter
          </button>
        </div>
      </div>

      {/* Mobile navbar — shown only below md (768px) */}
      <div className="md:hidden flex justify-between items-center mx-6 py-3">
        <h2 className="text-xl font-bold leading-7">Indie Space</h2>

        {/* Hamburger button — opens the slide-out menu */}
        <button onClick={toggleMenu} className="text-bold text-2xl">
          <HiMenu />
        </button>
      </div>
      
      {/* Slide-out mobile menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          // Slide in when open, slide off-screen left when closed
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Menu header with logo and close (X) button */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-black">Indie Space</h2>
          <button className="text-black text-2xl" onClick={toggleMenu}>
            <HiX />
          </button>
        </div>
        
        {/* Menu navigation links */}
        <ul className="p-4 space-y-4 text-black">
          <li className=" py-2 leading-4 text-[12px] cursor-pointer">News</li>
          <li className=" py-2 leading-4 text-[12px] cursor-pointer">
            Opinion
          </li>
          <li className=" py-2 leading-4 text-[12px] cursor-pointer">
            Technology
          </li>
          <li className=" py-2 leading-4 text-[12px] cursor-pointer">
            Our Planet
          </li>
          <li className=" py-2 leading-4 text-[12px] cursor-pointer">
            Health and Science
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
