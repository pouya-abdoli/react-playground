import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsStories from "./components/NewsStories";
import TrendingNews from "./components/TrendingNews";

const App = () => {
  return (
    <div>
      <div className="bg-[#0e0e0e] min-h-screen text-white">
        <Navbar />
        <Hero />
      </div>
      <NewsStories />
      <TrendingNews />
      <Blog />
    </div>
  );
};

export default App;
