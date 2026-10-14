import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsStories from "./components/NewsStories";

const App = () => {
  return (
    <div>
      <div className="bg-[#0e0e0e] min-h-screen text-white">
        <Navbar />
        <Hero />
      </div>
      <NewsStories />
    </div>
  );
};

export default App;
