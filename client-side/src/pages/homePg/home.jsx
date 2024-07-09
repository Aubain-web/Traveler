//import "./Home.css";
import HeaderCp from "../../componnents/header/headerCp";
import BodySearch from "../../componnents/bodySearch/bodySearch";
import FooterCp from "../../componnents/footer/footerCp";
import PromotionCarousel from "../../componnents/caroussel/slideShow.jsx";
import SlideShow from "../../componnents/caroussel/slideShow.jsx";
import './home.css';
const HomePg = () => {
  return (
      <div className="contain">
          <div className="content">
              <BodySearch />
              <PromotionCarousel />
          </div>
      </div>
  );
};
export default HomePg;
