import BannerSlider from "../components/BannerSlider";
import Category from "../components/Category";
import Hero from "../components/Hero";
import TrendingNews from "../components/TrendingNews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <TrendingNews />
      <BannerSlider />
    </div>
  );
};

export default Home;
