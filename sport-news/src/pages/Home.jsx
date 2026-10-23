import BannerSlider from "../components/BannerSlider";
import Category from "../components/Category";
import Hero from "../components/Hero";
import TrendingNews from "../components/TrendingNews";
import SportsArticle from "../components/SportsArticle";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <TrendingNews />
      <BannerSlider />
      <SportsArticle />
    </div>
  );
};

export default Home;
