import BannerSlider from "../components/BannerSlider";
import Category from "../components/Category";
import Hero from "../components/Hero";
import TrendingNews from "../components/TrendingNews";
import SportsArticle from "../components/SportsArticle";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <TrendingNews />
      <BannerSlider />
      <SportsArticle />
      <NewsLetter />
    </div>
  );
};

export default Home;
