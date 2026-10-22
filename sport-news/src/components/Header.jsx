import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
  // Controls mobile sidebar state
  const [isOpen, setIsOpen] = useState(false);

  // Closes mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Data-driven navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "Trending News", path: "/trending" },
    { name: "Recent News", path: "/recent" },
    { name: "Clubs Ranking", path: "/clubs" },
    { name: "Sports Article", path: "/articles" },
  ];

  return (
    // Header wrapper with elevated z-index to stay above page content
    <header className="h-15 w-full bg-white shadow-2xl relative z-50">
      <div className="container flex justify-between items-center h-full">
        <Link to="/" className="text-xl lg:text-4xl font-bold font-logo">
          Sport News
        </Link>

        {/* Desktop Navigation (Hidden on mobile) */}
        <ul className="hidden lg:flex gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="relative group text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                {link.name}

                {/* Animated underline expands from center on hover */}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search Button */}
        <button className="hidden lg:flex items-center gap-3 p-3 bg-[#B8C2CE] rounded-lg w-25 h-9 hover:bg-opacity-80 transition-all">
          <CiSearch /> Search
        </button>

        {/* Mobile Icons: Search & Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button>
            <CiSearch size={24} />
          </button>
          <button
            className="text-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu (Off-screen by default, slides in when open) */}
      <ul
        className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col gap-3 px-6 py-4 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="font-bold text-3xl border-b border-gray-300 pb-2 font-logo">
          Sport News
        </li>

        {/* Mobile Navigation Links */}
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              onClick={closeMenu}
              className="text-gray-600 hover:text-black font-medium transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;