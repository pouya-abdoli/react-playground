import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
    </div>
  );
};

export default App;
