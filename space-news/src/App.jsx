import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
