import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
  // Controls mobile sidebar open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Sticky-height header with shadow and elevated z-index for layering
    <header className="h-15 w-full bg-white shadow-2xl relative z-50">

      {/* Main header bar: container centers content; px-* adds horizontal padding 
      (container alone doesn't add padding) */}
      <div className="flex justify-between items-center h-full px-10 lg:px-30 md:px-15 mx-auto container">
        <Link to={"/"} className="text-4xl font-bold font-logo">Sport News</Link>

        {/* Desktop navigation - hidden below lg breakpoint */}
        <ul className="hidden lg:flex gap-15">
          <li>Home</li>
          <li className="text-[#2626269d]">Category</li>
          <li className="text-[#2626269d]">Trending News</li>
          <li className="text-[#2626269d]">Recent News</li>
          <li className="text-[#2626269d]">Clubs Ranking </li>
          <li className="text-[#2626269d]">Sports Article </li>
        </ul>

        {/* Desktop search button - only visible on large screens */}
        <button
          className="hidden lg:flex items-center gap-3 p-3 bg-[#B8C2CE]
        rounded-lg w-25 h-9"
        >
          <CiSearch /> Search
        </button>

        {/* Mobile icons - visible below lg breakpoint */}
        <div className="lg:hidden flex items-center gap-3">
          <button>
            <CiSearch size={24} />
          </button>

          {/* Toggles the mobile menu open/close */}
          <button
            className="text-lg"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
      
      {/* Mobile slide-in menu: fixed off-screen by default 
      (-translate-x-full), slides in when isOpen is true */}
      <ul
        className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col gap-4 px-6 py-6 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="font-bold text-lg border-b pb-2">Sport Snap</li>
        
        {/* Mobile nav links */}
        <div className="flex flex-col gap-2">
          <li className="-mt-2">Home</li>
          <li className="text-[#2626269d]">Category</li>
          <li className="text-[#2626269d]">Trending News</li>
          <li className="text-[#2626269d]">Recent News</li>
          <li className="text-[#2626269d]">Clubs Ranking</li>
          <li className="text-[#2626269d]">Sports Article</li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
