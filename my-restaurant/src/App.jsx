import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
    </div>
  );
};

export default App;
